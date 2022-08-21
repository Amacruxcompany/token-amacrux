require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_API_KEY= "0000000000000000000000000000";

const GOERLI_PRIVATE_KEY = "00000000000000000000000000000000000";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
