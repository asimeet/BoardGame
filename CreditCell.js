let BoardCell = require("./boardCell");
class CreditCell extends BoardCell {
    constructor(cellProps) {
        super(cellProps);
    }


    calcAmmount(playerAmmount) {
        return playerAmmount = playerAmmount + this.ammount;
    }
}

module.exports = CreditCell;