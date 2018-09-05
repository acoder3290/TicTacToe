//The game class which governs the play
function TTTGame(squares){
    this.board = new Board(squares);
    this.board.buildBoard();
    this.players = [];
    this.players[0] = new Player('John','X');
    this.players[1] = new Player('Doe', 'O');

    this.getCurrentPlayer = function(){
        return this.players[ this.board.filledSquares %2 ];
    };

    //I have written this as dummy method which should be replaced with actual logic
    this.play = function(){
        console.log(`======= INITIAL STATE =======`);
        this.board.displayBoard();
        this.board.update(0,1,this.getCurrentPlayer().symbol);
        this.board.printMove();
        this.board.update(0,0,this.getCurrentPlayer().symbol);
        this.board.printMove();
        this.board.update(1,1,this.getCurrentPlayer().symbol);
        this.board.printMove();
        this.board.update(2,1,this.getCurrentPlayer().symbol);
        this.board.printMove();
        this.board.update(1,0,this.getCurrentPlayer().symbol);
        console.log(`======= FINAL STATE =======`);
        this.board.displayBoard();
    }

    //It will contain method to decide winner or tie
}
