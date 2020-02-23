#!/bin/sh
# docker kill $(docker ps -aq)
# docker rm $(docker ps -aq)
# docker rm -f $(docker ps -aq)

# echo "=================== WARNING ==================="
# echo "      docker containers killed and removed     "
# echo "==============================================="

# ng build
cd ./backend
rm -rf ./wallet
# rm -rf ./network-configuration
# mkdir ./network-configuration

if [ $? -ne 0 ]; then
    echo "ERROR !!!! "
    exit 1
fi

node ./server.js