const string = "|/-\\|/-\\|"

const printString = function(string, delay) {
  if (string[0]) {
    setTimeout(() => {
      process.stdout.write(`\r${string[0]}   `);
      printString(string.slice(1), delay);
    }, delay);
  } else {
    console.log();
  }
};

printString(string, 200);