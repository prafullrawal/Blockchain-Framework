const express = require("express");
const { exec } = require('child_process');
const fs = require('fs');
const yaml = require('js-yaml');

const router = express.Router();

module.exports = router;

router.post('/CreatePeerOrgs', (req, res) => {

    let peerObject = req.body.peersObject;
    let orgName = peerObject.PeerOrgs[0].Name;
    let cc_filename = "crypto-config-" + orgName + ".yaml";
    console.log("peerObject", peerObject);
    console.log("orgName", orgName);
    console.log("cc_filename", cc_filename);

    try {
        let yamlStr = yaml.safeDump(peerObject);
        fs.writeFileSync('./network/' + cc_filename, yamlStr, 'utf8');

        console.log("Modify request!");
        fs.writeFile('./network/modify.sh', '#!/bin/sh ' +
            '\nexport PATH=$PATH:$GOPATH/src/github.com/hyperledger/fabric/build/bin:${PWD}/../bin:${PWD}:$HOME/fabric-samples/bin' +
            '\nexport FABRIC_CFG_PATH=${PWD}', function (err) {
                if (err) throw err;
                console.log('Saved!');
        });
        fs.appendFile('./network/modify.sh', '\ncryptogen generate --config=./' + cc_filename, function (err) {
            if (err) throw err;
            console.log('Saved!');
        })

        res.send({
            success: true,
            response: "Peers created success"
        });
    } catch (e) {
        console.log(e);
        res.send({
            success: false,
            response: "Issue while creating Peers " + e
        });
    }
});

router.post('/CreateNewConfigTx', (req, res) => {

    let newConfigTx = req.body.newConfigTx;

    let configtxOrg1 = {
        "Name": newConfigTx.msp,
        "ID": newConfigTx.msp,
        "MSPDir": "crypto-config/peerOrganizations/" + newConfigTx.domain + "/msp",
        "AnchorPeers": [
            {
                "Host": "peer0." + newConfigTx.domain,
                "Port": newConfigTx.port
            }
        ]
    };

    let configtxOrg2 = {
        "Name": newConfigTx.msp,
        "ID": newConfigTx.msp,
        "MSPDir": "crypto-config/peerOrganizations/" + newConfigTx.domain + "/msp",
        "AnchorPeers": [
            {
                "Host": "peer0." + newConfigTx.domain,
                "Port": newConfigTx.port
            }
        ]
    };

    let configtxOrg3 = {
        "Name": newConfigTx.msp,
        "ID": newConfigTx.msp,
        "MSPDir": "crypto-config/peerOrganizations/" + newConfigTx.domain + "/msp",
        "AnchorPeers": [
            {
                "Host": "peer0." + newConfigTx.domain,
                "Port": newConfigTx.port
            }
        ]
    };

    try {
        var doc = yaml.safeLoad(fs.readFileSync('./network/configtx.yaml', 'utf8'));
        var size = doc.Organizations.length;

        doc.Organizations[size] = configtxOrg1;
        size--;
        doc.Profiles.OneOrgOrdererGenesis.Consortiums.SampleConsortium.Organizations[size] = configtxOrg2;
        doc.Profiles.OneOrgChannel.Application.Organizations[size] = configtxOrg3;

        let yamlStr = yaml.safeDump(doc);
        fs.writeFileSync('./network/configtx.yaml', yamlStr, 'utf8');

        fs.appendFile('./network/modify.sh', '\nconfigtxgen -profile OneOrgOrdererGenesis -channelID $CHANNEL_NAME -outputBlock ./config/genesis.block' +
            '\nconfigtxgen -profile OneOrgChannel -outputCreateChannelTx ./config/channel.tx -channelID $CHANNEL_NAME' +
            '\nconfigtxgen -profile OneOrgChannel -outputAnchorPeersUpdate ./config/' + newConfigTx.msp + 'anchors.tx -channelID $CHANNEL_NAME -asOrg ' + newConfigTx.msp
            , function (err) {
                if (err) throw err;
                console.log('Saved!');
            });


        res.send({
            success: true,
            response: "Configtx created success"
        });
    } catch (e) {
        console.log(e);
        res.send({
            success: false,
            response: "Issue while creating Configtx " + e
        });
    }
});

router.post('/peerDockerCompose', (req, res) => {

    let dcObj = req.body.payload.pdcObj;
    let orgName = req.body.payload.orgName;
    console.log("docker compose obj: " + dcObj);
    let dc_filename = "docker-compose-" + orgName + ".yaml";

    try {
        let dcYaml = yaml.safeDump(dcObj);
        fs.writeFileSync('./network/' + dc_filename, dcYaml, 'utf8');
        fs.appendFile('./network/modify.sh', '\ndocker-compose -f ' + dc_filename + ' up -d \n', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        res.send({
            success: true,
            response: "docker-compose-new.yaml modified"
        });

    } catch (e) {
        console.log(e);
        res.send({
            success: false,
            response: "Issue while creating docker-compose-new.yaml file " + e
        });
    }

});

router.post('/spinUp', async (req, res) => {
    let channelName = req.body.channelName;

    try {
        exec('export CHANNEL_NAME=' + channelName + ' && cd ./network && chmod 777 modify.sh && ./modify.sh', (err, stdout, stderr) => {
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
            response: "successfully modified "
        });

    } catch (e) {
        console.log(e);
        res.send({
            success: false,
            response: "Issue while deleting Peers " + e
        });
    }
});
