const { ethers } = require("hardhat");

async function main() {
  const DrugTraceability = await ethers.getContractFactory("DrugTraceability");
  
  console.log("Deploying DrugTraceability contract...");
  const drugTraceability = await DrugTraceability.deploy();

  // Wait for deployment confirmation
  await drugTraceability.waitForDeployment();

  console.log("DrugTraceability deployed to:", await drugTraceability.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
