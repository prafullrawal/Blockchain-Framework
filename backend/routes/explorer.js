const express = require("express");
const path = require("path");
const hfc = require("fabric-client");
const fs = require("fs");
const circular = require("circular-json");

const router = express.Router();

router.post("/getMainPageData", function(req, res) {
  var username = req.body.username;
  var orgname = req.body.orgname;
  var peername = req.body.peername;
  checkUserDetails(username).then(function(user) {
    if (user.success) {
      var client = user.client;
      fetchChannelDetails(peername, client).then(function(channel) {
        if (channel.success) {
        console.log(channel.channel.Channel);
          var channelInfo = channel.channel;
          var blockNo = channel.response.height.low - 1;
          fetchBlockDetails(channelInfo, blockNo, peername).then(function(block) {
            if (block.success)
              res.json({
                success: true,
                code: 200,
                channelName: channel.channel_name,
                totalNodes: channel.channel._channel_peers.size,
                chaincode: channel.chaincode,
                currentBlockHash: channel.response.currentBlockHash.toString('hex'),
                previousBlockHash: channel.response.previousBlockHash.toString('hex'),
                totalBlocks: channel.response.height.low,
                block: circular.stringify(block.response)
              });
            else res.json({ success: false, code: 500, block: block });
          });
        } else {
          res.json({ success: false, code: 500, channel: channel });
        }
      });
    } else res.json({ success: false, code: 500, user: user });
  });
});

router.post("/blockInfo", function(req, res) {
  var username = req.body.username;
  var orgname = req.body.orgname;
  var peername = req.body.peername;
  var blockNo = req.body.blockNumber -1;
  checkUserDetails(username).then(function(user) {
    if (user.success) {
      var client = user.client;
      fetchChannelDetails(peername, client).then(function(channel) {
        if (channel.success) {
          var channelInfo = channel.channel;
          fetchBlockDetails(channelInfo, blockNo, peername).then(function(block) {
            var currentBlockHash = calculateBlockHash(block.response.header);
            if (block.success)
            res.json({
              success: true,
              code: 200,
              currentBlock: block.response.header.number,
              currentBlockHash: currentBlockHash,
              previousBlockHash: block.response.header.previous_hash,
              block: circular.stringify(block.response)
            });
            else res.json({ success: false, code: 500, block: block });
          });
        } else {
          res.json({ success: false, code: 500, channel: channel });
        }
      });
    } else res.json({ success: false, code: 500, user: user });
  });
});

router.post("/txnInfo", function(req, res) {
  var username = req.body.username;
  var orgname = req.body.orgname;
  var peername = req.body.peername;
  var txnId = req.body.txnId;
  checkUserDetails(username).then(function(user) {
    if (user.success) {
      var client = user.client;
      fetchChannelDetails(peername, client).then(function(channel) {
        if (channel.success) {
          var channelInfo = channel.channel;
          fetchTxnDetails(channelInfo, txnId, peername).then(function(txn) {
            if (txn.success)
              res.json({
                success: true,
                code: 200,
                txn: circular.stringify(txn.response)
              });
            else res.json({ success: false, code: 500, txn: txn });
          });
        } else {
          res.json({ success: false, code: 500, channel: channel });
        }
      });
    } else res.json({ success: false, code: 500, user: user });
  });
});

var checkUserDetails = async username => {
  try {
    var client = hfc.loadFromConfig("/home/ubuntu/feature-prem/backend/network/connection.yaml");
    client.loadFromConfig("/home/ubuntu/feature-prem/backend/network/user.yaml");
    await client.initCredentialStores();
    if (username) {
      var user = await client.getUserContext(username, true);
      if (!user) {
        return {
          success: false,
          message: "User was not found",
          response: user
        };
      } else {
        return {
          success: true,
          message: "User was found successfully",
          response: user,
          client: client
        };
      }
    }
  } catch (error) {
    console.log("Inside catch block for finding details for username!"+error);
    return {
      success: false,
      message: "Issues in fetching data !"
    };
  }
};

var fetchChannelDetails = async (peername, client) => {
  try {
    var channelName = "";
    var channelInfo = await client.queryChannels(peername);
    if (channelInfo) {
      for (var i = 0; i < channelInfo.channels.length; i++) {
        channelName = channelInfo.channels[i].channel_id;
      }
      if (channelName != "") {
        var channel = client.getChannel(channelName);
        if (channel) {
          var channel_payload = await channel.queryInfo(peername);
          var chaincode_payload = await channel.queryInstantiatedChaincodes();
          if (channel_payload && chaincode_payload) {
            console.log("Channel payload found successfully !");
            return {
              success: true,
              message: "Channel payload found successfully !",
              channel_name: channelName,
              channel: channel,
              response: channel_payload,
              chaincode: chaincode_payload
            };
          } else {
            console.log("Channel payload not found !");
            return {
              success: false,
              message: "Channel payload not found !",
              channel_name: channelName
            };
          }
        } else {
          console.log("Channel data not found !");
          return {
            success: false,
            message: "Channel data not found !",
            channel_name: channelName
          };
        }
      } else {
        console.log("Channel name not found !");
        return {
          success: false,
          message: "Channel name not found !",
          channel: channelName
        };
      }
    } else {
      console.log("Channel info not found !");
      return {
        success: false,
        message: "Channel info not found !"
      };
    }
  } catch (error) {
    console.log("Inside catch block for finding channel details !"+error);
    return {
      success: false,
      message: "Issues in fetching data !"
    };
  }
};

var fetchBlockDetails = async (channel, blockNumber, peername) => {
  try {
    var block_payload = await channel.queryBlock(
      parseInt(blockNumber, peername)
    );
    if (block_payload) {
      console.log("Block data fetched successfully !");
      return {
        success: true,
        message: "Block data fetched successfully !",
        response: block_payload
      };
    } else {
      console.log("Issues in fetching block data !");
      return {
        success: false,
        message: "Issues in fetching block data !"
      };
    }
  } catch (error) {
    console.log("Inside catch block for finding block details !"+error);
    return {
      success: false,
      message: "Issues in fetching data !"
    };
  }
};

var fetchTxnDetails = async (channel, txnId, peername) => {
  try {
    var txn_payload = await channel.queryTransaction(txnId, peername);
    if (txn_payload) {
      console.log("Txn data fetched successfully !");
      return {
        success: true,
        message: "Txn data fetched successfully !",
        response: txn_payload
      };
    } else {
      console.log("Issues in fetching txn data !");
      return {
        success: false,
        message: "Issues in fetching txn data !"
      };
    }
  } catch (error) {
    console.log("Inside catch block for finding txn details !"+error);
    return {
      success: false,
      message: "Issues in fetching data !"
    };
  }
};

function calculateBlockHash (header) {
  let headerAsn = asn.define('headerAsn', function() {
    this.seq().obj(
      this.key('Number').int(),
      this.key('PreviousHash').octstr(),
     this.key('DataHash').octstr()
   );
 });

  let output = headerAsn.encode({
      Number: parseInt(header.number),
      PreviousHash: Buffer.from(header.previous_hash, 'hex'),
      DataHash: Buffer.from(header.data_hash, 'hex')
    }, 'der');
  let hash = sha.sha256(output);
  console.log(hash);
  return hash;
};

module.exports = router;
