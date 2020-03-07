class BoardPlayer{
    constructor(playerName){
        this.name = playerName;
        this.baseAmmount = 1000;
    }
    getName(){
        return this.name;
    }
}

module.exports = BoardPlayer;