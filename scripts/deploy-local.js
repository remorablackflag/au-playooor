// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    
    const provider = new hre.ethers.providers.JsonRpcProvider("http://localhost:8545");

    console.log(await provider.getNetwork());

    console.log("Deploying TestGame...");

    const TestGame = await hre.ethers.getContractFactory("TestGame", provider.getSigner());
    const testGame = await TestGame.deploy();

    await testGame.deployed();

    console.log(`TestGame deployed to ${testGame.address}`);

    console.log("Deploying Playooor...");

    const Playooor = await hre.ethers.getContractFactory("Playooor", provider.getSigner());
    const playooor = await Playooor.deploy(testGame.address);

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
