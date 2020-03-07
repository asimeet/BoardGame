let BoardGame = require("./boardGame");
( ()=> {
    let boardCellPattern = ["E","E","J","H","E","T","J","T","E","E","H","J","T","H","E","E","J","H","E","T","J","T","E","E","H","J","T","H","J","E","E","J","H","E","T","J","T","E","E","H","J","T","E","H","E"];
    let diceInput = [4,4,4,6,7,8,5,11,10,12,2,3,5,6,7,8,5,11,10,12,2,3,5,6,7,8,5,11,10,12];
    let boardGame = new BoardGame(boardCellPattern,3);
    let player = 0;
    diceInput.forEach( (item,index) => {
        if(index % 3  == 0 ){
            player = 0;
        }
        player ++;
        boardGame.updatePosition(item, player);
    })
})();


