#!/bin/bash
# MUST provide 2 args
# $1 = channel name $2 = org name

function usage {
    echo "Usage:./anchor-updates.sh $1 $2"
    echo "Update Anchor Peer Transaction File"
}

if [ "$1" == "" ]; then
    usage
    exit
fi

echo "Channel Name :-"$1

echo "Org Name :-"$2

export ORG_NAME_MSP=$2"MSP"

echo "ORG MSP NAME :-"$ORG_NAME_MSP

export ORG_NAME_TX=$ORG_NAME_MSP".tx"

echo "ORG MSP TX FILE NAME :-"$ORG_NAME_TX

echo "====> Update the Org MSP Tx <===="

configtxgen -outputAnchorPeersUpdate ./config/$ORG_NAME_TX -channelID $1 -profile OneOrgChannel -asOrg $ORG_NAME_MSP

echo "====> Updation of the Org MSP Tx done <===="
