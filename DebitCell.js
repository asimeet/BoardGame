let BoardCell = require("./boardCell");
class DebitCell extends BoardCell {
    constructor(cellProps) {
        super(cellProps);
    }


    calcAmmount(playerAmmount) {
        return playerAmmount = playerAmmount + this.ammount;
    }
}

module.exports = DebitCell;