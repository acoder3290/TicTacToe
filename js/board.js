//Board Class
function Board(size){
    this.size = size;
    this.grid = [];
    this.filledSquares = 0;
}

//Builds board based on number of squares
Board.prototype.buildBoard = function(){
    var i,j;
    for(i = 0; i < this.size; i++){
        this.grid[i] = [];
        for(j = 0; j < this.size; j++){
            this.grid[i][j] = new Square();
        }
    }
};

//Updates board on each players turn
Board.prototype.update = function(row, column, symbol){
    this.grid[row][column].setSymbol(symbol);
    this.filledSquares++;
};

//Show the current state of board
Board.prototype.displayBoard = function(){
    var i, j,board = "";
    for(i = 0; i < this.size; i++){
        for(j = 0; j < this.size; j++){
            board += this.grid[i][j].symbol +' - ';
        }
        board += '\n';
    }
    console.log(board);
};
