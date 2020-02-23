#!/bin/bash

rm docker-compose.yaml crypto-config.yaml configtx.yaml connection.yaml

rm -rf crypto-config/*

rm config/*

docker rm -f $(docker ps -aq)
