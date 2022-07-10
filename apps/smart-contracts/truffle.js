var HDWalletProvider = require("truffle-hdwallet-provider");
const API_KEY = '9a83b03a819cf6eb108d1673af89de2c73991e06d6d52a2da86bd670ed236fff';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(API_KEY, "https://ropsten.infura.io/v3/4e34527143cd4ea0a3d74752695859a2")
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  }
};