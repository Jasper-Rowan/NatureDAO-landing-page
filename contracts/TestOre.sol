//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestOre is ERC20 {
   constructor() ERC20("GreenVault Ore", "ORE") {
        _mint(0x691029c1FE350CaBdc3c01b947bc8ACeDED743CD, 1_000_000_000 * 1_000_000_000_000_000_000);
    }
}