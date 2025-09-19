import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

export default {
  solidity: "0.8.18", // match your contract pragma
  networks: {
    volta: {
      url: process.env.VOLTA_RPC,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 73799
    }
  }
};
