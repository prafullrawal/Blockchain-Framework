const express = require("express");
const fs = require("fs");
const YAML = require("json-to-pretty-yaml");
const {
  promisify
} = require("util");
const exec = promisify(require("child_process").exec);

const router = express.Router();

router.post("/createCryptoFile", function (req, res) {
  var crypto = {
    "OrdererOrgs": [{
      "Name": "Orderer",
      "Domain": "example.com",
      "Specs": [{
        "Hostname": "orderer"
      }]
    }],
    "PeerOrgs": [{
      "Name": "Org1",
      "Domain": "org1.example.com",
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
  var config = {
    "Organizations": [{
      "Name": "OrdererOrg",
      "ID": "OrdererMSP",
      "MSPDir": "crypto-config/ordererOrganizations/example.com/msp"
    }, {
      "Name": "Org1MSP",
      "ID": "Org1MSP",
      "MSPDir": "crypto-config/peerOrganizations/org1.example.com/msp",
      "AnchorPeers": [{
        "Host": "peer0.org1.example.com",
        "Port": 7051
      }]
    }],
    "Application": {
      "Organizations": null
    },
    "Orderer": {
      "OrdererType": "solo",
      "Addresses": ["orderer.example.com:7050"],
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
          "Addresses": ["orderer.example.com:7050"],
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
            "MSPDir": "crypto-config/ordererOrganizations/example.com/msp"
          }]
        },
        "Consortiums": {
          "SampleConsortium": {
            "Organizations": [{
              "Name": "Org1MSP",
              "ID": "Org1MSP",
              "MSPDir": "crypto-config/peerOrganizations/org1.example.com/msp",
              "AnchorPeers": [{
                "Host": "peer0.org1.example.com",
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
            "Name": "Org1MSP",
            "ID": "Org1MSP",
            "MSPDir": "crypto-config/peerOrganizations/org1.example.com/msp",
            "AnchorPeers": [{
              "Host": "peer0.org1.example.com",
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

  var path = '/home/ubuntu/CustomFramework/backend/network/crypto-config/peerOrganizations/org1.example.com/ca/';
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
              "FABRIC_CA_SERVER_CA_NAME=ca.example.com",
              "FABRIC_CA_SERVER_CA_CERTFILE=/etc/hyperledger/fabric-ca-server-config/ca.org1.example.com-cert.pem",
              "FABRIC_CA_SERVER_CA_KEYFILE=/etc/hyperledger/fabric-ca-server-config/"+privateKeyFullName
            ],
            "ports": [
              "7054:7054"
            ],
            "command": "sh -c 'fabric-ca-server start -b admin:adminpw'",
            "volumes": [
              "./crypto-config/peerOrganizations/org1.example.com/ca/:/etc/hyperledger/fabric-ca-server-config"
            ],
            "container_name": "ca.example.com",
            "networks": [
              "basic"
            ]
          },
          "orderer.example.com": {
            "container_name": "orderer.example.com",
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
              "./crypto-config/ordererOrganizations/example.com/orderers/orderer.example.com/:/etc/hyperledger/msp/orderer",
              "./crypto-config/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/:/etc/hyperledger/msp/peerOrg1"
            ],
            "networks": [
              "basic"
            ]
          },
          "peer0.org1.example.com": {
            "container_name": "peer0.org1.example.com",
            "image": "hyperledger/fabric-peer",
            "environment": [
              "CORE_VM_ENDPOINT=unix:///host/var/run/docker.sock",
              "CORE_PEER_ID=peer0.org1.example.com",
              "FABRIC_LOGGING_SPEC=info",
              "CORE_CHAINCODE_LOGGING_LEVEL=info",
              "CORE_PEER_LOCALMSPID=Org1MSP",
              "CORE_PEER_MSPCONFIGPATH=/etc/hyperledger/msp/peer/",
              "CORE_PEER_ADDRESS=peer0.org1.example.com:7051",
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
              "./crypto-config/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/msp:/etc/hyperledger/msp/peer",
              "./crypto-config/peerOrganizations/org1.example.com/users:/etc/hyperledger/msp/users",
              "./config:/etc/hyperledger/configtx"
            ],
            "depends_on": [
              "orderer.example.com",
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
              "CORE_PEER_ADDRESS=peer0.org1.example.com:7051",
              "CORE_PEER_LOCALMSPID=Org1MSP",
              "CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp",
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

router.get("/startNetwork", function (req, res) {
  var filename = 'connection.yaml';
  bringConatinersUp().then(function (container) {
    if (container.success) {
      createChannel().then(function (channel) {
        if (channel.success) {
          joinPeerToChannel().then(function (join) {
            if (join.success) {
              var path = '/home/ubuntu/CustomFramework/backend/network/crypto-config/peerOrganizations/org1.example.com/ca/';
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
                        "orderers": ["orderer.example.com"],
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
                        "mspid": "Org1MSP",
                        "peers": ["peer0.org1.example.com"],
                        "certificateAuthorities": ["ca.org1.example.com"],
                        "adminPrivateKey": {
                          "path": "/home/ubuntu/CustomFramework/backend/network/crypto-config/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp/keystore/" + privateKey
                        },
                        "signedCert": {
                          "path": "/home/ubuntu/CustomFramework/backend/network/crypto-config/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp/signcerts/Admin@org1.example.com-cert.pem"
                        }
                      }
                    },
                    "orderers": {
                      "orderer.example.com": {
                        "url": "grpc://localhost:7050",
                        "grpcOptions": {
                          "ssl-target-name-override": "orderer.example.com"
                        },
                        "tlsCACerts": {
                          "path": "/home/ubuntu/CustomFramework/backend/network/crypto-config/ordererOrganizations/example.com/orderers/orderer.example.com/tls/ca.crt"
                        }
                      }
                    },
                    "peers": {
                      "peer0.org1.example.com": {
                        "url": "grpc://localhost:7051",
                        "grpcOptions": {
                          "ssl-target-name-override": "peer0.org1.example.com"
                        },
                        "tlsCACerts": {
                          "path": "/home/ubuntu/CustomFramework/backend/network/crypto-config/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt"
                        }
                      }
                    },
                    "certificateAuthorities": {
                      "ca.org1.example.com": {
                        "url": "http://localhost:7054",
                        "httpOptions": {
                          "verify": false
                        },
                        "tlsCACerts": {
                          "path": "/home/ubuntu/CustomFramework/backend/network/crypto-config/peerOrganizations/org1.example.com/ca/ca.org1.example.com-cert.pem"
                        },
                        "registrar": [{
                          "enrollId": "admin",
                          "enrollSecret": "adminpw"
                        }],
                        "caName": "ca.org1.example.com"
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

