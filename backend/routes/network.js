const express = require("express");
const fs = require("fs");
const path = require("path");
const dirname = path.resolve();

const YAML = require("json-to-pretty-yaml");
const {
  promisify
} = require("util");
const exec = promisify(require("child_process").exec);

const router = express.Router();


router.post("/createCryptoFile", function (req, res) {

  

  var caname = req.body.caname;
  var caport = req.body.caport;
  var host = req.body.host;
  var odrname = req.body.odrname;
  var odrport = req.body.odrport;
  var orgmsp = req.body.orgmsp;
  var orgname = req.body.orgname;
  var peername = req.body.peername;
  var peerport = req.body.peerport;

  var crypto = {
    "OrdererOrgs": [{
      "Name": odrname,
      "Domain": host,
      "Specs": [{
        "Hostname": odrname.toLowerCase()
      }]
    }],
    "PeerOrgs": [{
      "Name": orgname,
      "Domain": orgname.toLowerCase()+"."+host,
      "Template": {
        "Count": 1
      },
      "Users": {
        "Count": 1
      }
    }]
  };

  var filename = "crypto-config.yaml";

  createYamlFile(filename, crypto).then(function (response) {
    if (response.success) {
      res.json({
        success: response.success,
        response: response.message
      });
    }
  });

});

router.post("/createConfigFile", function (req, res) {

  var caname = req.body.caname;
  var caport = req.body.caport;
  var host = req.body.host;
  var odrname = req.body.odrname;
  var odrport = req.body.odrport;
  var orgmsp = req.body.orgmsp;
  var orgname = req.body.orgname;
  var peername = req.body.peername;
  var peerport = req.body.peerport;
  
  var config = {
    "Organizations": [{
      "Name": odrname+"Org",
      "ID": odrname+"MSP",
      "MSPDir": "crypto-config/"+odrname.toLowerCase()+"Organizations/"+host+"/msp"
    }, {
      "Name": orgmsp, 
      "ID": orgmsp,
      "MSPDir": "crypto-config/peerOrganizations/"+orgname.toLowerCase()+"."+host+"/msp",
      "AnchorPeers": [{
        "Host": peername+"."+orgname.toLowerCase()+"."+host,
        "Port": peerport
      }]
    }],
    "Application": {
      "Organizations": null
    },
    "Orderer": {
      "OrdererType": "solo",
      "Addresses": [odrname.toLowerCase()+"."+host+":"+odrport],
      "BatchTimeout": "2s",
      "BatchSize": {
        "MaxMessageCount": 10,
        "AbsoluteMaxBytes": "99 MB",
        "PreferredMaxBytes": "512 KB"
      },
      "Kafka": {
        "Brokers": ["127.0.0.1:9092"]
      },
      "Organizations": null
    },
    "Profiles": {
      "OneOrgOrdererGenesis": {
        "Orderer": {
          "OrdererType": "solo",
          "Addresses": [odrname.toLowerCase()+"."+host+":"+odrport],
          "BatchTimeout": "2s",
          "BatchSize": {
            "MaxMessageCount": 10,
            "AbsoluteMaxBytes": "99 MB",
            "PreferredMaxBytes": "512 KB"
          },
          "Kafka": {
            "Brokers": ["127.0.0.1:9092"]
          },
          "Organizations": [{
            "Name": "OrdererOrg",
            "ID": "OrdererMSP",
            "MSPDir": "crypto-config/ordererOrganizations/"+host+"/msp"
          }]
        },
        "Consortiums": {
          "SampleConsortium": {
            "Organizations": [{
              "Name": orgmsp,
              "ID": orgmsp,
              "MSPDir": "crypto-config/peerOrganizations/"+orgname.toLowerCase()+"."+host+"/msp",
              "AnchorPeers": [{
                "Host": peername+"."+orgname.toLowerCase()+"."+host,
                "Port": 7051
              }]
            }]
          }
        }
      },
      "OneOrgChannel": {
        "Consortium": "SampleConsortium",
        "Application": {
          "Organizations": [{
            "Name": orgmsp,
            "ID": orgmsp,
            "MSPDir": "crypto-config/peerOrganizations/"+orgname.toLowerCase()+"."+host+"/msp",
            "AnchorPeers": [{
              "Host": peername+"."+orgname.toLowerCase()+"."+host,
              "Port": 7051
            }]
          }]
        }
      }
    }
  };

  var filename = "configtx.yaml";

  createYamlFile(filename, config).then(function (response) {
    if (response.success) {
      res.json({
        success: response.success,
        response: response.message
      });
    }
  });
});

router.get("/generateCertsAndConfigFiles", function (req, res) {
  generateCertAndGenesisBlock().then(function (cert) {
    console.log(cert);
    if (cert.success) {
      generateChannelTxFile().then(function (tx) {
        console.log(tx);
        if (tx.success) {
          updateOrgMSP().then(function (msp) {
            console.log(msp);
            if (msp.success) {
              res.json({
                success: true,
                response: "Certs and configuration files generated successfully !"
              });
            }
          });
        }
      });
    }
  });
});

router.post("/createDockerFile", function (req, res) {
  var filename = "docker-compose.yaml";

  var caname = req.body.caname;
  var caport = req.body.caport;
  var host = req.body.host;
  var odrname = req.body.odrname;
  var odrport = req.body.odrport;
  var orgmsp = req.body.orgmsp;
  var orgname = req.body.orgname;
  var peername = req.body.peername;
  var peerport = req.body.peerport;

  var path = dirname+"/network/crypto-config/peerOrganizations/"+orgname.toLowerCase()+"."+host+"/ca/" ;
  findPrivateKey(path).then(function (private) {
    if (private.success) {
      var privateKeyFullName = private.response;
      var dockerCompose = {
        "version": "2",
        "networks": {
          "basic": null
        },
        "services": {
          "ca.example.com": {
            "image": "hyperledger/fabric-ca",
            "environment": [
              "FABRIC_CA_HOME=/etc/hyperledger/fabric-ca-server",
              "FABRIC_CA_SERVER_CA_NAME="+caname+"."+host,
              "FABRIC_CA_SERVER_CA_CERTFILE=/etc/hyperledger/fabric-ca-server-config/"+caname+"."+orgname.toLowerCase()+"."+host+"-cert.pem",
              "FABRIC_CA_SERVER_CA_KEYFILE=/etc/hyperledger/fabric-ca-server-config/"+privateKeyFullName
            ],
            "ports": [
              "7054:7054"
            ],
            "command": "sh -c 'fabric-ca-server start -b admin:adminpw'",
            "volumes": [
              "./crypto-config/peerOrganizations/"+orgname.toLowerCase()+"."+host+"/ca/:/etc/hyperledger/fabric-ca-server-config"
            ],
            "container_name": caname+"."+host,
            "networks": [
              "basic"
            ]
          },
          "orderer.example.com": {
            "container_name": odrname.toLowerCase()+"."+host,
            "image": "hyperledger/fabric-orderer",
            "environment": [
              "FABRIC_LOGGING_SPEC=info",
              "ORDERER_GENERAL_LISTENADDRESS=0.0.0.0",
              "ORDERER_GENERAL_GENESISMETHOD=file",
              "ORDERER_GENERAL_GENESISFILE=/etc/hyperledger/configtx/genesis.block",
              "ORDERER_GENERAL_LOCALMSPID=OrdererMSP",
              "ORDERER_GENERAL_LOCALMSPDIR=/etc/hyperledger/msp/orderer/msp"
            ],
            "working_dir": "/opt/gopath/src/github.com/hyperledger/fabric/orderer",
            "command": "orderer",
            "ports": [
              "7050:7050"
            ],
            "volumes": [
              "./config/:/etc/hyperledger/configtx",
              "./crypto-config/ordererOrganizations/"+host+"/orderers/"+odrname.toLowerCase()+"."+host+"/:/etc/hyperledger/msp/orderer",
              "./crypto-config/peerOrganizations/"+orgname.toLowerCase()+"."+host+"/peers/"+peername+"."+orgname.toLowerCase()+"."+host+"/:/etc/hyperledger/msp/peerOrg1"
            ],
            "networks": [
              "basic"
            ]
          },
          "peer0.org1.example.com": {
            "container_name": peername+"."+orgname.toLowerCase()+"."+host,
            "image": "hyperledger/fabric-peer",
            "environment": [
              "CORE_VM_ENDPOINT=unix:///host/var/run/docker.sock",
              "CORE_PEER_ID="+peername+"."+orgname.toLowerCase()+"."+host,
              "FABRIC_LOGGING_SPEC=info",
              "CORE_CHAINCODE_LOGGING_LEVEL=info",
              "CORE_PEER_LOCALMSPID=Org1MSP",
              "CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/msp/peer/",
              "CORE_PEER_ADDRESS="+peername+"."+orgname.toLowerCase()+"."+host+":7051",
              "CORE_VM_DOCKER_HOSTCONFIG_NETWORKMODE=${COMPOSE_PROJECT_NAME}_basic",
              "CORE_LEDGER_STATE_STATEDATABASE=CouchDB",
              "CORE_LEDGER_STATE_COUCHDBCONFIG_COUCHDBADDRESS=couchdb:5984",
              "CORE_LEDGER_STATE_COUCHDBCONFIG_USERNAME=",
              "CORE_LEDGER_STATE_COUCHDBCONFIG_PASSWORD="
            ],
            "working_dir": "/opt/gopath/src/github.com/hyperledger/fabric",
            "command": "peer node start",
            "ports": [
              "7051:7051",
              "7053:7053"
            ],
            "volumes": [
              "/var/run/:/host/var/run/",
              "./crypto-config/peerOrganizations/"+orgname.toLowerCase()+"."+host+"/peers/"+peername+"."+orgname.toLowerCase()+"."+host+"/msp:/etc/hyperledger/msp/peer",
              "./crypto-config/peerOrganizations/"+orgname.toLowerCase()+"."+host+"/users:/etc/hyperledger/msp/users",
              "./config:/etc/hyperledger/configtx"
            ],
            "depends_on": [
              odrname.toLowerCase()+"."+host,
              "couchdb"
            ],
            "networks": [
              "basic"
            ]
          },
          "couchdb": {
            "container_name": "couchdb",
            "image": "hyperledger/fabric-couchdb",
            "environment": [
              "COUCHDB_USER=",
              "COUCHDB_PASSWORD="
            ],
            "ports": [
              "5984:5984"
            ],
            "networks": [
              "basic"
            ]
          },
          "cli": {
            "container_name": "cli",
            "image": "hyperledger/fabric-tools",
            "tty": true,
            "environment": [
              "GOPATH=/opt/gopath",
              "CORE_VM_ENDPOINT=unix:///host/var/run/docker.sock",
              "FABRIC_LOGGING_SPEC=info",
              "CORE_PEER_ID=cli",
              "CORE_PEER_ADDRESS="+peername+"."+orgname.toLowerCase()+"."+host+":7051",
              "CORE_PEER_LOCALMSPID=Org1MSP",
              "CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/"+orgname.toLowerCase()+"."+host+"/users/Admin@"+orgname.toLowerCase()+"."+host+"/msp",
              "CORE_CHAINCODE_KEEPALIVE=10"
            ],
            "working_dir": "/opt/gopath/src/github.com/hyperledger/fabric/peer",
            "command": "/bin/bash",
            "volumes": [
              "/var/run/:/host/var/run/",
              "./../chaincode/:/opt/gopath/src/github.com/",
              "./crypto-config:/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/"
            ],
            "networks": [
              "basic"
            ]
          }
        }
      };
      createYamlFile(filename, dockerCompose).then(function (response) {
        if (response.success) {
          res.json({
            success: response.success,
            response: response.message
          });
        }
      });
    }
  });
});

router.post("/startNetwork", function (req, res) {

  var caname = req.body.caname;
  var caport = req.body.caport;
  var host = req.body.host;
  var odrname = req.body.odrname;
  var odrport = req.body.odrport;
  var orgmsp = req.body.orgmsp;
  var orgname = req.body.orgname;
  var peername = req.body.peername;
  var peerport = req.body.peerport;


  var filename = 'connection.yaml';
  bringConatinersUp().then(function (container) {
    if (container.success) {
      createChannel().then(function (channel) {
        if (channel.success) {
          joinPeerToChannel().then(function (join) {
            if (join.success) {
              var path = dirname+"/network/crypto-config/peerOrganizations/"+orgname.toLowerCase()+"."+host+"/ca/";
              findPrivateKey(path).then(function (private) {
                if (private.success) {
                  var privateKey = private.response;
                  var connection = {
                    "name": "basic-network",
                    "x-type": "hlfv1",
                    "description": "Basic Network",
                    "version": "1.0",
                    "channels": {
                      "mychannel": {
                        "orderers": [odrname.toLowerCase()+"."+host],
                        "peers": {
                          "peer0.org1.example.com": {
                            "endorsingPeer": true,
                            "chaincodeQuery": true,
                            "ledgerQuery": true,
                            "eventSource": true
                          }
                        },
                        "chaincodes": ["mycc:v0"]
                      }
                    },
                    "organizations": {
                      "Org1": {
                        "mspid": orgmsp,
                        "peers": [peername+"."+orgname.toLowerCase()+"."+host],
                        "certificateAuthorities": [caname+"."+orgname.toLowerCase()+"."+host],
                        "adminPrivateKey": {
                          "path": dirname+"/network/crypto-config/peerOrganizations/"+orgname.toLowerCase()+"."+host+"/users/Admin@"+orgname.toLowerCase()+"."+host+"/msp/keystore/" + privateKey
                        },
                        "signedCert": {
                          "path": dirname+"/network/crypto-config/peerOrganizations/"+orgname.toLowerCase()+"."+host+"/users/Admin@"+orgname.toLowerCase()+"."+host+"/msp/signcerts/Admin@"+orgname.toLowerCase()+"."+host+"-cert.pem"
                        }
                      }
                    },
                    "orderers": {
                      "orderer.example.com": {
                        "url": "grpc://localhost:7050",
                        "grpcOptions": {
                          "ssl-target-name-override": odrname.toLowerCase()+"."+host
                        },
                        "tlsCACerts": {
                          "path": dirname+"/network/crypto-config/ordererOrganizations/"+host+"/orderers/"+odrname.toLowerCase()+"."+host+"/tls/ca.crt"
                        }
                      }
                    },
                    "peers": {
                      "peer0.org1.example.com": {
                        "url": "grpc://localhost:7051",
                        "grpcOptions": {
                          "ssl-target-name-override": peername+"."+orgname.toLowerCase()+"."+host
                        },
                        "tlsCACerts": {
                          "path": dirname+"/network/crypto-config/peerOrganizations/"+orgname.toLowerCase()+"."+host+"/peers/"+peername+"."+orgname.toLowerCase()+"."+host+"/tls/ca.crt"
                        }
                      }
                    },
                    "certificateAuthorities": {
                      "ca.org1.example.com"  : {
                        "url": "http://localhost:7054",
                        "httpOptions": {
                          "verify": false
                        },
                        "tlsCACerts": {
                          "path": dirname+"/network/crypto-config/peerOrganizations/"+orgname.toLowerCase()+"."+host+"/ca/"+caname+"."+odrname.toLowerCase()+"."+host+"-cert.pem"
                        },
                        "registrar": [{
                          "enrollId": "admin",
                          "enrollSecret": "adminpw"
                        }],
                        "caName": caname+"."+orgname.toLowerCase()+"."+host
                      }
                    }
                  };
                  createYamlFile(filename, connection).then(function (response) {
                    if (response.success) {
                      res.json({
                        success: response.success,
                        response: response.message
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
});

var createYamlFile = async (filename, json) => {
  try {
    const yamlData = YAML.stringify(json);
    fs.writeFileSync("./network/" + filename, yamlData, "utf8");
    return {
      success: true,
      message: "File created successfully with name :" + filename + " !"
    };
  } catch (error) {
    console.log("Inside catch block for creating yaml !");
    return {
      success: false,
      message: "Issues in creating yaml file !"
    };
  }
};

var generateCertAndGenesisBlock = async () => {
  try {
    const generate = await exec("cd ./network/ && bash ./init-setup.sh");
    console.log("Cert and genesis block generated successfully !");
    return {
      success: true,
      response: generate.stdout.trim(),
      message: "Certs and genesis block generated successfully !"
    };
  } catch (error) {
    console.log("Inside catch block for generating cert details and genesis block ! " + error);
    return {
      success: false,
      message: "Issues in generating cert data and genesis block !"
    };
  }
};

var updateOrgMSP = async () => {
  try {
    const msp = await exec("cd ./network && bash ./update-org-msp.sh mychannel Org1");
    console.log("Org MSP updated successfully !");
    return {
      success: true,
      response: msp.stdout.trim(),
      message: "Org MSP updated successfully !"
    };
  } catch (error) {
    console.log("Inside catch block for updating MSP details !" + error);
    return {
      success: false,
      message: "Issues in updating MSP data !"
    };
  }
};

var generateChannelTxFile = async () => {
  try {
    const generateTx = await exec(
      "cd ./network && bash ./create-channel-tx.sh mychannel"
    );
    console.log("Txn file generated successfully !");
    return {
      success: true,
      response: generateTx.stdout.trim(),
      message: "Channel transaction file generated successfully !"
    };
  } catch (error) {
    console.log("Inside catch block for generating tx details !" + error);
    return {
      success: false,
      message: "Issues in generating tx data !"
    };
  }
};

var bringConatinersUp = async () => {
  try {
    const containers = await exec(
      "cd ./network && bash ./containers-up.sh"
    );
    console.log("Containers brought up successfully !");
    return {
      success: true,
      response: containers.stdout.trim(),
      message: "Containers brought up successfully !"
    };
  } catch (error) {
    console.log("Inside catch block for bringing containers up !" + error);
    return {
      success: false,
      message: "Issues in bringing containers up !"
    };
  }
};

var createChannel = async () => {
  try {
    const channel = await exec(
      "cd ./network && bash ./channel-creation.sh"
    );
    console.log("Channel created successfully !");
    return {
      success: true,
      response: channel.stdout.trim(),
      message: "Channel created successfully !"
    };
  } catch (error) {
    console.log("Inside catch block for creating channel !" + error);
    return {
      success: false,
      message: "Issues in creating channel !"
    };
  }
};

var joinPeerToChannel = async () => {
  try {
    const join = await exec(
      "cd ./network && bash ./join-peer-channel.sh"
    );
    console.log("Peer joined channel successfully !");
    return {
      success: true,
      response: join.stdout.trim(),
      message: "Peer joined channel successfully !"
    };
  } catch (error) {
    console.log("Inside catch block for joining peer to channel !" + error);
    return {
      success: false,
      message: "Issues in joining peer to channel !"
    };
  }
};

var findPrivateKey = async (path) => {
  var filename = '';
  try {
    fs.readdirSync(path).forEach(file => {
      if (file.includes('_sk')) {
        console.log(file);
        filename = file;
      }
    });
    return {
      success: true,
      response: filename
    }
  } catch (error) {
    console.log("Inside catch block for finding CA filename details !" + error);
    return {
      success: false,
      message: "Issues in finding CA filename data !"
    };
  }
};

module.exports = router;

