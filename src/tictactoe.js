var prompt = require('prompt');

var board = [
  [[' '], [' '], ['X']],
  [[' '], ['X'], [' ']],
  [['X'], [' '], [' ']]
];
console.log(board);

var squares = { // references the correct square
  'one': board[0][0],
  'two': board[0][1],
  'three': board[0][2],
  'four': board[1][0],
  'five': board[1][1],
  'six': board[1][2],
  'seven': board[2][0],
  'eight': board[2][1],
  'nine': board[2][2]
}

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

  if (squares.one[0] === squares.five[0] && squares.five[0] === squares.nine[0]
   || squares.three[0] === squares.five[0] && squares.five[0] === squares.seven[0]) {
    complete = true;
  }

}

var checkSquare = function(square) { // check if a square is empty
  if (squares[square] === ' ') {
    return true;
  }
  return false;
}

var toggle = function(square) { // toggles the square according to the player
  if (checkSquare(square)) {
    squares[square][0] = player;
  }
  player = player === 'X' ? 'Y' : 'X';
}



checkCompletion();
console.log(complete);

prompt.start();

console.log('Choose a number between 1-9 for the square #, starting from the top left')
prompt.get(['square'], function(err, res) {
  toggle(res.square);
  console.log(board);
});

// have a function that checks if a game is complete or not
// while the checking function is false, then prompt the user for a square number
// toggle which player's turn it is (X or Y)
// the respective square gets toggled as the X or Y in the board
// when the checking function is true, determine the winner and the game ends