
class BoardCell{
    constructor(cellProps){ 
        this.transactionType = cellProps.transaction;
        this.name = cellProps.type;
        this.description = cellProps.description;
        this.transactionAmmount = cellProps.ammount;

    }

    getInstance(){
        if(this.transactionType === "debit"){
            let DebitCell = require("./DebitCell");
            return new DebitCell(this);   
        }else if(this.transactionType === "credit"){
            let CreditCell = require("./DebitCell");
            return new CreditCell(this);
        }
    }

    calcAmmount(playerAmmount){
        //to be implemented by child class
    }
}

module.exports = BoardCell;
