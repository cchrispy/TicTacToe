var prompt = require('prompt');

var board = [
  [[' '], [' '], [' ']],
  [[' '], [' '], [' ']],
  [[' '], [' '], [' ']]
];
console.log(board);

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