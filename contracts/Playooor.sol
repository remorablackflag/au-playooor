// // SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Playooor {

    address owner;
    address game;
    uint attempts;

    event OwnershipTransfered(address indexed oldOwner, address indexed newOwner);
    event GameSet(address indexed newGame);
    event GameHistory(address indexed oldGame, uint attempts);
    event Winnooor(address indexed player, uint attempts);
    
    error Losooor(address player, uint attempts);

    modifier onlyOwner {
        require(owner == msg.sender, "Sender is not the owner");
        _;
    }

    constructor(address _game) {
        owner = msg.sender;
        game = _game;
        attempts = 0;
    }

    function play() public onlyOwner {
        attempts++;
        (bool success, ) = game.call(abi.encodeWithSignature("attempt()"));
        
        if(!success) {
            revert Losooor(msg.sender, attempts);
        }

        emit Winnooor(msg.sender, attempts);
    }

    function transferOwership(address newOwner) public onlyOwner {
        owner = newOwner;
        emit OwnershipTransfered(msg.sender, newOwner);
    }

    function setGameAddress(address newGame) public onlyOwner {
        emit GameHistory(game, attempts);
        game = newGame;
        attempts = 0;
    }

}