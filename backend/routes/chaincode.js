const express = require("express");
var exec = require("child_process").exec;
const multer = require('multer');
const fs = require("fs");
const readline = require("readline");
const stream = require("stream");
const YAML = require("json-to-pretty-yaml");
const JSON = require("js-yaml");
const chaincodedir = './chaincode';
const swaggerdir = './swagger';
const router = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './chaincode/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({
  storage: storage
}).single('file');

router.post('/upload', function (req, res) {
  if (!fs.existsSync(chaincodedir)) {
    fs.mkdirSync(chaincodedir);
  }
  upload(req, res, function (err) {
    console.log(req.file);
    if (err) {
      res.json({
        error_code: 1,
        err_desc: err
      });
      return;
    }
    res.json({
      error_code: 0,
      err_desc: null
    });
  });
});

router.post("/installChaincode", (req, res, callback) => {
  console.log("inside cspost function");
  //exec('./script.sh')
  exec("sh backend/scripts/install.sh", function (err, stdout, stderr) {
    if (err) {
      console.log("inside error");
      callback(stderr);
    } else {
      console.log("inside stdout");
      //callback (stdout)
      console.log(stdout);
      var output = "chaincode installed sucessfully";
      res.send(output);
    }
  });
});

router.post("/upgradeChaincode", (req, res) => {
  console.log("inside cspost function");
  //exec('./script.sh')
  exec("sh backend/scripts/upgrade.sh", function (err, stdout, stderr) {
    if (err) {
      console.log("inside error");
      callback(stderr);
    } else {
      console.log("inside stdout");
      //callback (stdout)
      console.log(stdout);
      var output = "chaincode upgraded sucessfully";
      res.send(output);
    }
  });
});

/***************************************
BELOW CODE IS FOR SWAGGER IMPLEMENTATION
***************************************/
router.get('/generateSwaggerFile', (req, res) => {
  var instream = fs.createReadStream("./chaincode/chaincode.go");
  var outstream = new stream();
  var rl = readline.createInterface(instream, outstream);
  var arr = [];
  rl.on("line", function (line) {
    arr.push(line);
  });
  rl.on("close", function () {
    generateSwaggerJSON(arr).then(function (response) {
      if (response.success) {
        var filename = 'swagger.json';
        var jsonData = response.response;
        createJSONFile(filename, jsonData).then(function (data) {
          if (data.success) {
            res.json({
              success: true
            });
          }
        });
      }
    })
  });
});
var getFunctionInfo = async (arr, start) => {
  var map = new Object();
  const str = arr[start];
  const name = (await removeRoundBracketsAndTextFromString(str)).response;
  const functionName = (await getFunctionName(name)).name;
  if (functionName != '') {
    var functionInfo = await getStartAndEndIndex(arr, start);
    var functionType = await getFunctionType(arr, start, functionInfo.end);
    if (functionType.success) {
      functionType = functionType.type;
    }
    var requestParam = await getRequestParam(str);
    if (requestParam.success) {
      map['functionName'] = functionName;
      map['functionType'] = functionType;
      map['params'] = requestParam.response;
    }
  }
  if (Object.keys(map).length > 0) {
    return {
      success: true,
      response: map
    };
  } else {
    return {
      success: false
    };
  }
};
var getModels = async (arr, start) => {
  try {
    var modelName = (await getModelName(arr[start])).name;
    var currentModel = await getStartAndEndIndex(arr, start);
    var modelStructure = await createModelStructure(
      arr,
      start,
      currentModel.end
    );
    if (modelStructure.success) {
      var modelData = new Object();
      modelData[modelName] = modelStructure.response;
      return {
        success: true,
        result: modelData
      };
    } else {
      return {
        success: false
      };
    }
  } catch (error) {
    return {
      success: false
    };
  }
};
var createModelStructure = async (arr, firstIndex, lastIndex) => {
  try {
    var map = new Object();
    for (var i = firstIndex; i < lastIndex; i++) {
      var value = arr[i];
      if (value.indexOf('"') !== -1) {
        value = value.replace(/\"/g, '');
      }
      if (value.indexOf('`') !== -1) {
        value = value.replace(/\`/g, '');
      }
      if (value.indexOf(':') !== -1) {
        var split = value.split(':');
        var objectType = (await getObjectType(split[0])).type.trim();
        var objectName = split[1].trim();
        if (objectType != '') {
          map[objectName] = objectType;
        }
      }
    }
    if (Object.keys(map).length > 0) {
      return {
        success: true,
        response: map
      };
    } else {
      return {
        success: false
      };
    }
  } catch (error) {
    console.log("Issue in creating the object !" + error);
    return {
      success: false
    };
  }
};
var getRequestParam = async name => {
  try {
    var paramsFromString = name.match(/\(.*?\)/g);
    var allParams = [];
    for (var i = 0; i < paramsFromString.length; i++) {
      var params = paramsFromString[i].substring(1, paramsFromString[i].length - 1);
      if (params.indexOf(',') != -1) {
        var info = params.split(',');
        for (var j = 0; j < info.length; j++) {
          var map = new Object();
          if (info[j].match(/\S+/g) != -1) {
            var data = info[j].match(/\S+/g);
            if (data.length == 2) {
              var objectName = data[0];
              var objectType = (await getObjectType(data[1])).type;
              if (objectType != '') {
                map['name'] = objectName;
                map['in'] = 'query';
                map['required'] = true;
                map['type'] = objectType;
                allParams.push(map);
              }
            }
          }
        }
      }
    }
    return {
      success: true,
      response: allParams
    };
  } catch (error) {
    console.log('Params not identified properly !' + error);
    return {
      success: false
    };
  }
};
var getStartAndEndIndex = async (arr, start) => {
  try {
    var count = 0;
    var end;
    for (var i = start; i < arr.length; i++) {
      if (arr[i].indexOf("{") !== -1) {
        count = count + (arr[i].match(/{/g) || []).length;
      } else if (arr[i].indexOf("}") !== -1) {
        count = count - (arr[i].match(/}/g) || []).length;
      }
      if (count == 0) {
        end = i;
        break;
      }
    }
    return {
      success: true,
      start: start,
      end: end
    };
  } catch (error) {
    console.log("Issues in finding the start and end index !" + error);
    return {
      success: false
    };
  }
};
var getModelName = async name => {
  try {
    var result = '';
    if (name.match(/\S+/g) != -1) {
      var arr = name.match(/\S+/g);
      for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        if (str.indexOf("type") !== -1) {
          result = result + '';
        } else if (str.indexOf("struct") !== -1) {
          result = result + '';
        } else if (str.indexOf("{") !== -1) {
          result = result + '';
        } else {
          result = result + arr[i].trim();
        }
      }
    }
    return {
      success: true,
      name: result
    };
  } catch (error) {
    console.log("Model name not fetched !" + error);
    return {
      success: false
    };
  }
};
var getFunctionType = async (arr, start, end) => {
  try {
    var query = 0;
    var invoke = 0;
    for (var i = start; i < end; i++) {
      var str = arr[i];
      if (str.indexOf("PutState") !== -1) {
        invoke = invoke + 1;
      } else if (str.indexOf("GetState") !== -1) {
        query = query + 1;
      }
    }
    if (invoke > 0) {
      return {
        success: true,
        type: "invoke"
      };
    } else if (invoke == 0 && query > 0) {
      return {
        success: true,
        type: "query"
      };
    } else {
      return {
        success: false
      };
    }
  } catch (error) {
    console.log("Function type not found issue !" + error);
    return {
      success: false
    };
  }
};
var getObjectType = async name => {
  try {
    var result = '';
    if (name.match(/\S+/g) != -1) {
      var arr = name.match(/\S+/g);
      for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        if (str.indexOf('string') !== -1) {
          result = result + 'string';
        } else if (str.indexOf('int') !== -1) {
          result = result + 'int';
        } else if (str.indexOf('bool') !== -1) {
          result = result + 'bool';
        } else if (str.indexOf('float64') !== -1) {
          result = result + 'float64';
        } else {
          result = result + '';
        }
      }
    }
    return {
      success: true,
      type: result
    };
  } catch (error) {
    console.log("Data type not found !" + error);
    return {
      success: false
    };
  }
};
var getFunctionName = async name => {
  try {
    var result = '';
    if (name.match(/\S+/g) != -1) {
      var arr = name.match(/\S+/g);
      for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        if (str.indexOf("function") !== -1) {
          result = result + '';
        } else if (str.indexOf("func") !== -1) {
          result = result + '';
        } else if (str.indexOf("{") !== -1) {
          result = result + '';
        } else if (str.indexOf("error") !== -1) {
          result = result + '';
        } else if (str.indexOf("main") !== -1) {
          result = result + '';
        } else if (str.indexOf("InitLedger") !== -1) {
          result = result + '';
        } else {
          result = result + arr[i].trim();
        }
      }
    }
    return {
      success: true,
      name: result
    };
  } catch (error) {
    console.log("Function name not fetched !" + error);
    return {
      success: false
    };
  }
};
var removeRoundBracketsAndTextFromString = async name => {
  try {
    var result = '';
    if (name.indexOf('(') != -1) {
      result = name.replace(/\([^\)\(]*\)/g, "");
    }
    return {
      success: true,
      response: result
    };
  } catch (error) {
    console.log('Issue in removing brackets from string !' + error);
    return {
      success: false
    };
  }
}
var generateSwaggerJSON = async (arr) => {
  var modelInfo = await getAllModels(arr);
  var functionInfo = await getAllFunctionDetails(arr);
  var swaggerInfo = await createSwaggerJSON(functionInfo, modelInfo);
  if (swaggerInfo.success) {
    return {
      success: true,
      response: swaggerInfo.response
    }
  }
}
var getAllModels = async (arr) => {
  try {
    var allModels = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].indexOf("struct") !== -1 && arr[i].indexOf("type") !== -1) {
        var modelData = await getModels(arr, i);
        if (modelData.success) {
          allModels.push(JSON.stringify(modelData.result));
        }
      }
    }
    return {
      success: true,
      response: allModels
    };
  } catch (error) {
    console.log('Issue while fetching model info :' + error);
    return {
      success: false
    }
  }
}
var getAllFunctionDetails = async (arr) => {
  try {
    var funtions = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].indexOf("func") !== -1) {
        var functionData = await getFunctionInfo(arr, i);
        funtions.push(functionData.response);
      }
    }
    return {
      success: true,
      response: funtions
    };
  } catch (error) {
    return {
      success: false
    }
  }
}
var createSwaggerJSON = async (func, model) => {
  try {
    var paths = await createPaths(func);
    var info = await createInfoMap();

    var json = new Object();
    json['swagger'] = '2.0';
    json['info'] = info;
    json['host'] = 'localhost:3000';
    json['basePath'] = '/swagger/';
    json['paths'] = paths;

    return {
      success: true,
      response: json
    };
  } catch (error) {
    return {
      success: false
    }
  }
}

var createInfoMap = async () => {
  var contact = new Object();
  contact['email'] = 'prem.dutt@cognizant.com';

  var license = new Object();
  license['name'] = 'Apache 2.0';
  license['url'] = 'http://www.apache.org/licenses/LICENSE-2.0.html';

  var info = new Object();
  info['title'] = 'Hyperledger Fabric Custom APIs';
  info['description'] = 'Hyperledger fabric custom APIs for chaincode and network related functions';
  info['version'] = '0.0.1';
  info['termsOfService'] = 'termsOfService';
  info['contact'] = contact;
  info['license'] = license;

  return info;
}

var createPaths = async (func, model) => {
  var tags = ['chaincode'];
  var produces = ['application/json'];
  var basicParams = [{
    'name': 'username',
    'in': 'query',
    'required': true,
    'type': 'string'
  }];
  var response = {
    '200': {
      'description': 'JSON object containing response details',
      'schema': {
        'type': 'object'
      }
    }
  };
  var path = new Object();
  for (var i = 0; i < func.response.length; i++) {
    var map = new Object();
    var data = func.response[i];
    if (typeof data !== 'undefined' && data) {
      var innerObject = new Object();
      var methodParams = data.params;
      methodParams.push(basicParams[0]);
      innerObject['tags'] = tags;
      innerObject['description'] = 'Get details';
      innerObject['produces'] = produces;
      innerObject['parameters'] = methodParams;
      innerObject['responses'] = response;
      if (data.functionType == 'invoke') {
        map['post'] = innerObject;
        path['/' + data.functionName] = map;
      } else if (data.functionType == 'query') {
        map['get'] = innerObject;
        path['/' + data.functionName] = map;
      }
    }
  }
  return path;
}
var createJSONFile = async (filename, json) => {
  try {
    fs.writeFileSync("./chaincode/" + filename, json, "utf8");
    return {
      success: true,
      message: "File created successfully with name :" + filename + " !"
    };
  } catch (error) {
    console.log("Inside catch block for creating json !");
    return {
      success: false,
      message: "Issues in creating json file !"
    };
  }
};
var checkFileAndReadDetails = async () => {
  if (!fs.existsSync(swaggerdir)) {
    fs.mkdirSync(swaggerdir);
  }
  fs.exists('./network/connection.yaml', function (exists) {
    var chaincodeName = '';
    var chaincodeVersion = '';
    if (!exists) {
      const connectionInfo = fs.readFileSync('./network/connection.yaml', {
        encoding: 'utf8'
      });
      const jsonRes = JSON.safeLoad(connectionInfo);
      const channelInfo = jsonRes.channels;
      for (var key in channelInfo) {
        if (channelInfo.hasOwnProperty(key)) {
          var key = key;
          var val = channelInfo[key].chaincodes[0];
          if(val.indexOf(':') !== -1) {
            var data = val.split(':');
            chaincodeName = data[0];
            chaincodeVersion = data[1];
          }
        }
      }
      return {
        success: true,
        data: jsonRes,
        version: chaincodeVersion,
        name: chaincodeName
      }
    } else {
      return {
        success: false
      }
    }
  });
};
var getChannelDetailsFromConnectionFile = async () => {

}

module.exports = router;
