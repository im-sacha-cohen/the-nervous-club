const fs = require('fs');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = fs.readFileSync("./secrets/mnemonic.secret").toString().trim();
const POLYGON_API = fs.readFileSync("./secrets/api-polygon.secret").toString().trim();

module.exports = {
  networks: {
    polygon_testnet: {
      provider: () => new HDWalletProvider(mnemonic, "https://rpc-mumbai.maticvigil.com/v1/0decd557b41ddd50bd3b7b60349fa55dd4f039e3"),
      network_id: "*",
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    }
  },

  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    polygonscan: POLYGON_API,
  },

  compilers: {
    solc: {
      version: "0.8.7"
    }
  }
};
