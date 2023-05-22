// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const ethProvider = require("eth-provider");

const chainId = 5; // 5 Görli
const gameAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

async function main() {
    
    const myEthProvider = ethProvider(["frame"]);
    myEthProvider.setChain(chainId);
    const provider = new hre.ethers.providers.Web3Provider(myEthProvider);

    console.log(await provider.getNetwork());

    const Playooor = await hre.ethers.getContractFactory("Playooor", provider.getSigner());
    const playooor = await Playooor.deploy(gameAddress);

    await playooor.deployed();

    console.log(`Playooor deployed to ${playooor.address}`);

    console.log("Calling play()...");

    const result = await playooor.play();

    console.log("Play call result: ", result);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
