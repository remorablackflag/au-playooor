//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract TestGame {
    event Winner(address);

    function attempt() external {
        console.log("Attempt: ", msg.sender, tx.origin);
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        console.log("Winner: ", msg.sender);
        emit Winner(msg.sender);
    }
}