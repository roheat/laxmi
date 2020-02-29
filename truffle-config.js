require("dotenv").config();
const mnemonic = process.env.MNEMONIC;
const HDWalletProvider = require("truffle-hdwallet-provider");
// Create your own key for Production environments (https://infura.io/)
const INFURA_ID = process.env.INFURA_ID || "d6760e62b67f4937ba1ea2691046f06d";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://ropsten.infura.io/v3/${INFURA_ID}`
        ),
      gasPrice: 10000000000,
      network_id: 3
    },
    kovan: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://kovan.infura.io/v3/${INFURA_ID}`
        ),
      gasPrice: 10000000000,
      network_id: 42
    }
  }
};
