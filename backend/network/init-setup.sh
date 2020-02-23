echo "====> Generating the crypto material <===="

cryptogen generate --config=./crypto-config.yaml

sleep 2

echo "====> Crypto material generated successfully <===="

echo "====> Creating folder for config files <===="

mkdir -p config

echo "====> Config folder created successfully <===="

echo "====> Creating Genesis Block <===="

configtxgen -outputBlock ./config/genesis.block -channelID ordererchannel -profile OneOrgOrdererGenesis

sleep 2

echo "====> Genesis Block Created <===="
