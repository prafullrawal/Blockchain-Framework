const express = require("express");
const { exec } = require('child_process');

const router = express.Router();

module.exports = router;

router.post('/regAdmin', (req, res) => {

    console.log("registerAdmin server req payload = ", req.body.payload);
    let msp = req.body.payload.msp;
    let username = req.body.payload.username;
  
    try {
      exec('node registerAdmin.js ' + msp, (err, stdout, stderr) => {
        if (err) {
          //some err occurred
          console.error(err)
        } else {
         // the *entire* stdout and stderr (buffered)
         console.log(`stdout: ${stdout}`);
         console.log(`stderr: ${stderr}`);
        }
      });
  
      res.send({
        success: true,
        response: "Admin Registration success"
      });
    } catch (e) {
      console.log(e);
      res.send({
        success: false,
        response: "Issue while Admin Registration " + e
      });
    }
  });
  
router.post('/regUser', (req, res) => {
  
    console.log("regUser server req payload = ", req.body.payload);
    let msp = req.body.payload.msp;
    let username = req.body.payload.username;
  
    try {
      exec('node registerUser.js ' + msp + " " + username, (err, stdout, stderr) => {
        if (err) {
          //some err occurred
          console.error(err)
        } else {
         // the *entire* stdout and stderr (buffered)
         console.log(`stdout: ${stdout}`);
         console.log(`stderr: ${stderr}`);
        }
      });
  
      res.send({
        success: true,
        response: "User Registration success"
      });
    } catch (e) {
      console.log(e);
      res.send({
        success: false,
        response: "Issue while User Registration " + e
      });
    }
  });
