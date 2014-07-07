//Square class
function Square(){
    this.symbol = "";
    this.isOccupied = false;
}

//Based on player turn set symbols
Square.prototype.setSymbol = function(value){
    if(value !== 'X' && value !== 'O'){
        return 'Please enter X or O';
    }else if(this.isOccupied){
        return 'This square is already filler'
    }else{
        this.symbol = value;
        this.isOccupied = true;
    }
};

Square.prototype.getSymbol = function(){
    return this.symbol;
};