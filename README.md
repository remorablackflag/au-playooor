# **Emit the Winner**

Solution of the week4 task of [Alchemy University](https://university.alchemy.com)'s Ethereum Developer Bootcamp.

### **Notes**

- deploy-local.js deploys on local hardhat network using default signer
- deploy-local.js deploys `TestGame.sol` and passes the address to the `Playooor` contract
- deploy.js uses [Frame provider](https://github.com/floating/eth-provider) so it supports [Frame wallet](https://frame.sh) and hardware wallets
- chain ID and Alchemy's contract address are hardcoded in deploy.js
- both deploy scripts immediately call `play()` on the deployed Playooor contract
(which calls `attempt()` on Alchemy's contract)

---

# **Ready to be a winner?**

You'll need to prove your smart contract skills to us. Don't worry, you totally got this!

### **Your Goal: Emit the Winner event**

Your goal is simple! Emit the winner event on this smart contract on the Goerli testnet: https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code

If you take a look at the [Code tab in Etherscan](https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code), you'll see that the source code for this contract looks like this:

    // SPDX-License-Identifier: Unlicense
    pragma solidity ^0.8.0;

    contract Contract {
        event Winner(address);

        function attempt() external {
            require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
            emit Winner(msg.sender);
        }
    }

How do we possibly make it so the `tx.origin` (the EOA who originated the transaction) is not equal to the `msg.sender`?

We'll leave that challenge up to you!