const { ethers } = require("hardhat");

async function main() {
  const emision = ethers.utils.parseEther("1000");

  const MantellCoin = await ethers.getContractFactory("MantellCoin");

  const mantellCoin = await MantellCoin.deploy(emision);

  await mantellCoin.deployed();

  console.log("MantellCoin deployed address:", mantellCoin.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
