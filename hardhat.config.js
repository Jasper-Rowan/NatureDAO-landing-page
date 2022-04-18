require("@nomiclabs/hardhat-waffle");

// Replace these private key with your Avalanche account private keys
// Be aware of NEVER adding private keys to GIT
const AVALANCHE_TEST_PRIVATE_KEY = "866225c4fc037cc36de355310a831fbbc4f956fb9e8938e04c72b3868c97c677"; //public: 0x602DF8e657E302AC4136268fbCe1AbD845Bf1f07
const AVALANCHE_MAIN_PRIVATE_KEY = "866225c4fc037cc36de355310a831fbbc4f956fb9e8938e04c72b3868c97c677";

module.exports = {
  solidity: "0.8.0",
  networks: {
    avalancheTest: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [`0x${AVALANCHE_TEST_PRIVATE_KEY}`]
    },
    avalancheMain: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [`0x${AVALANCHE_MAIN_PRIVATE_KEY}`]
    }
  }
};