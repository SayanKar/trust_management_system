// Change the contract address to your address 
export const CONTRACT_ADDRESS = "";

// Set the netwwork to rinkeby or fantom or any other network in NETWORKS_LIST
export const NETWORK = "rinkeby"; // "rinkeby" | "fantom"

// Make sure to put the updated abi in abi.js file
export { abi } from "./abi";

// Make sure the network u wanna deploy is in the NETWORKS_LIST object.
export const NETWORKS_LIST = {
  rinkeby: {
    chainId: "0x4",
    chainName: "rinkeby",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rinkeby.infura.io/v3/"],
  },
  fantom: {
    chainId: "0xFA",
    chainName: "fantom",
    nativeCurrency: {
      name: "fantom",
      symbol: "FTM",
      decimals: 18,
    },
    rpcUrls: ["https://rpcapi.fantom.network/"],
  },
};