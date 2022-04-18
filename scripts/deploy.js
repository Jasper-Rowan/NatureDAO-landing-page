async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const TestOre = await ethers.getContractFactory("TestOre");
    const TestOreContract = await TestOre.deploy();

    console.log("HelloWorld address:", TestOreContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });