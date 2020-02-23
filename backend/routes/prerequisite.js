const express = require("express");
var exec =  require('child_process').exec

const router = express.Router();

module.exports = router;

router.post('/installPrerequisite', (req, res, callback) => {
    console.log("inside cspost function")
    //exec('./script.sh')
    exec('sh backend/scripts/installPrerequisite.sh', function (err, stdout, stderr) {
      console.log("--------------------------------------")
      console.log(err)
      if (err){
        console.log("inside error")
        callback(stderr)
      } else {
        console.log("inside stdout")
        //callback (stdout)
        var output = "Softwares installed sucessfully"
        res.send(output)
      }
    });
  });
