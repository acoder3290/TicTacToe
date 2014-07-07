//The game class which governs the play
function TTTGame(squares){
    this.board = new Board(squares);
    this.board.buildBoard();
    this.players = [];
    this.players[0] = new Player('John','X');
    this.players[1] = new Player('Doe', 'O');

    this.getCurrentPlayer = function(){
        return (this.board.filledSquare %2 === 0 ? 'X' : 'O');
    };

    //I have written this as dummy method which should be replaced with actual logic
    this.play = function(){
        this.board.displayBoard();
        var currentPlayer = this.getCurrentPlayer();
        var row, col, symbol;
        this.board.update(0,1,currentPlayer);
        currentPlayer = this.getCurrentPlayer();
        this.board.update(0,0,currentPlayer);
        currentPlayer = this.getCurrentPlayer();
        this.board.update(1,1,currentPlayer);
        currentPlayer = this.getCurrentPlayer();
        this.board.update(2,1,currentPlayer);
        currentPlayer = this.getCurrentPlayer();
        this.board.update(1,0,currentPlayer);
        this.board.displayBoard();
    }

    //It will contain method to decide winner or tie
}