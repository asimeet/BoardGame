let BoardCell = require("./boardCell");
let BoardPlayer = require("./boardPlayer");
class BoardGame {
    constructor(boardCellPattern, noOfPlayers) {
        //arrays of string

        this.boardCellPattern = boardCellPattern;
        this.players =[];
        this.cellProps = [{
                type: "E",
                description: "Empty Cell",
                ammount: 0,
                transaction: "credit"
            },
            {
                type: "H",
                description: "Hotel Cell",
                ammount: 200,
                transaction: "debit"
            },
            {
                type: "J",
                description: "Jail Cell",
                ammount: 150,
                transaction: "debit"
            },
            {
                type: "T",
                description: "Treasure Cell",
                ammount: 200,
                transaction: "credit"
            }

        ];
        this.maxTurns = 5;
        this.boardCells = [];
        this.playersProfile = [];
        this.position = [];

        this.createCells();
        this.createPlayers(noOfPlayers);
    }

    createCells() {
        this.cellProps.forEach(item => {
            this.boardCells.push(new BoardCell(item).getInstance());
        });
    }
    createPlayers(noOfPlayers) {

        for(let i = 1 ; i<= noOfPlayers ;i ++){
            let playerObj = new BoardPlayer(i);
            this.playersProfile.push({
                playerObj :playerObj,
                turns: 0,
                ammount: playerObj.baseAmmount,
                boardPosition: 0
            });   
        }
    }
    updatePosition(diceInput, playerName) {
        if(this.maxTurnsReached() === true){
            return;
        }
        if (diceInput < 2 || diceInput > 12) {
            throw new Error(`Dice Input should be between 2 to 12, current Dice Input is ${diceInput}`);
        }
        let currentPlayer = this.playersProfile.find(item => item.playerObj.name === playerName);
        if (!currentPlayer) {
            throw new Error(`Player ${playerName} is not playing the board game`);
        }
        if (currentPlayer.boardPosition) {
            diceInput = diceInput + currentPlayer.boardPosition;
        }
        if (diceInput > this.boardCellPattern.length) {
            let currPos = diceInput % this.boardCellPattern.length - 1;
            currentPlayer.boardPosition = currPos;
        } else {
            currentPlayer.boardPosition = diceInput - 1;
        }
        currentPlayer.turns++;
        let cell = this.getCellInfo(currentPlayer.boardPosition);
        this.executeTransaction(cell, currentPlayer);
        if (this.maxTurnsReached() === true) {
            let winner = this.playersProfile[0];
            let results = this.playersProfile.map(item => {
                if(item.ammount > winner.ammount){
                    winner = item;
                }
                if(item.ammount )
                return {
                name: item.name,
                ammount: item.ammount
            }});
 
            let message = {
                info: "Game Over",
                results: JSON.stringify(results),
                winner: winner.playerObj.name
            }
            console.log( JSON.stringify(message));
        }
    }
    getCellInfo(pos) {
        let cell = this.boardCells.find(item => item.type == this.boardCellPattern[pos]);
        return cell;
    }
    executeTransaction(cell,currentPlayer) {
        currentPlayer.ammount = cell.calcAmmount(currentPlayer.ammount);
    }
    maxTurnsReached() {
        let maxTurnsReached = true;
        this.playersProfile.forEach(item => {
            if (item.turns < this.maxTurns) {
                maxTurnsReached = false;
            }
        });
        return maxTurnsReached;
    }

}

module.exports = BoardGame;