pragma solidity ^0.4.17;

contract Lottery{
    address public manager;

    address[]  public players;


    function Lottery() public{
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > 0.01 ether);

        players.push(msg.sender);
    }

    function random () private view returns (uint){
        return uint(keccak256(block.difficulty, now, players));  // Same as sha3();
    }

    function pickWinner() public restricted {
        // Not required, handled by the restricted function modifier
        // require(msg.sender == manager); // ensure only the manager can pick up the winner

        uint index = random() % players.length;

        players[index].transfer(this.balance);

        players = new address[](0); // Empty the list of players

        //  Ready to start a new Lottery
    }

    modifier restricted (){
        require(msg.sender == manager);
        _;
    }

    function getPlayers() public view returns (address[]) {
        return players;
    }
}

