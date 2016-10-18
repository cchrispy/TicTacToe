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