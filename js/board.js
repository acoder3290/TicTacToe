//Board Class
function Board(sqaures){
    this.squares = sqaures;
    this.grid = [];
    this.filledSquare = 0;
}

//Builds board based on number of squares
Board.prototype.buildBoard = function(){
    var i,j;
    for(i = 0; i < this.squares; i++){
        this.grid[i] = [];
        for(j = 0; j < this.squares; j++){
            this.grid[i][j] = new Square();
        }
    }
};

//Updates board on each players turn
Board.prototype.update = function(row, column, symbol){
    this.grid[row][column].setSymbol(symbol);
    this.filledSquare++;
};

//Show the current state of board
Board.prototype.displayBoard = function(){
    var i, j,brd = "";
    for(i = 0; i < this.squares; i++){
        for(j = 0; j < this.squares; j++){
            brd += this.grid[i][j].getSymbol() +' - ';
        }
        brd += '\n';
    }
    console.log(brd);
};
