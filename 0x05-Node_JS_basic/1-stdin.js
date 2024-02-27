const r = require('readline');

const readline = r.createInterface(
  {
    input: process.stdin,
    output: process.stdout,
  },
);
console.log('Welcome to Holberton School, what is your name?');
readline.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  readline.close();
});
readline.on('close', () => {
  console.log('This important software is now closing');
  readline.close();
});
