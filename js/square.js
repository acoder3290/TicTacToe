//Square class
function Square(){
    this.symbol = "";
}

//Based on player turn set symbols
Square.prototype.setSymbol = function(value){
    this.symbol = value;
};

//To check square has symbol
Square.prototype.isOccupied(){
    return this.symbol ? true : false;
}
