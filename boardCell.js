class BoardCell{
    constructor(cellProps){ 
        this.transaction = cellProps.transaction;
        this.type = cellProps.type;
        this.description = cellProps.description;
        this.ammount = cellProps.ammount;

    }

    getInstance(){
        if(this.transaction === "debit"){
            let DebitCell = require("./DebitCell");
            return new DebitCell(this);   
        }else if(this.transaction === "credit"){
            let CreditCell = require("./DebitCell");
            return new CreditCell(this);
        }
    }

    calcAmmount(playerAmmount){
        //to be implemented by child class
    }
}

module.exports = BoardCell;