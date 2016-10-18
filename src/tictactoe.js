var prompt = require('prompt');

var board = [
  [[' '], [' '], [' ']],
  [[' '], [' '], [' ']],
  [[' '], [' '], [' ']]
];
console.log(board);

var complete = false;
var filled = 0; // number of tic tac toe squares filled
var player = 'X';
var checkCompletion = function() { // checks if the game is over

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

  if (board[0][0][0] === board[1][1][0] && board[1][1][0] === board[2][2][0]
   || board[0][2][0] === board[1][1][0] && board[1][1][0] === board[2][0][0]) { // check diagonals
    complete = true;
  }

}

var toggle = function(square) { // toggles the square according to the player
  switch (square) {
    case 'one': 
    case 'two':
    case 'three':
    case 'four':
    case 'five':
    case 'six':
    case 'seven':
    case 'eight':
    case 'nine':
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