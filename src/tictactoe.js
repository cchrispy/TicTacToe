var prompt = require('prompt');

var board = [
  [[' '], ['X'], [' ']],
  [[' '], ['X'], [' ']],
  [[' '], ['X'], [' ']]
];
console.log(board);

var complete = false;
var filled = 0; // number of tic tac toe squares filled
var checkCompletion = function() {

  board.forEach(function(row) { // check row
    if (row[0][0] === row[1][0] && row[1][0] === row[2][0]) {
      complete = true;
    }
  });

  for (var i = 0; i < 3; i++) { // check column
    if (board[0][i][0] === board[1][i][0] && board[1][i][0] === board[2][i][0]) {
      complete = true;
    }
  }

  

}
checkCompletion();
console.log(complete);

prompt.start();
console.log('Choose a number between 1-9 for the square #, starting from the top left')
prompt.get(['square'], function(err, res) {
  console.log('response: ', res.square);
});

// have a function that checks if a game is complete or not
// while the checking function is false, then prompt the user for a square number
// toggle which player's turn it is (X or Y)
// the respective square gets toggled as the X or Y in the board
// when the checking function is true, determine the winner and the game ends