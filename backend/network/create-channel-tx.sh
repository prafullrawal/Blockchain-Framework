#!/bin/bash
# MUST provide 1 arg
# $1 = channel name

function usage {
    echo "Usage:./create-channel-tx.sh $1"
    echo "Creates Channel Transaction File"
}

if [ "$1" == "" ]; then
    usage
    exit
fi

echo "CHANNEL NAME :-"$1

echo "====> Generating the channel create tx <===="

configtxgen -outputCreateChannelTx  ./config/channel.tx -channelID $1 -profile OneOrgChannel

echo "====> Channel create tx file created <===="
