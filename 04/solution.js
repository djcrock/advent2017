const fs = require('fs');

const isValidPart1 = passphrase => {
  for (let i = 0; i < passphrase.length; i++) {
    if (passphrase.indexOf(passphrase[i]) !== i) {
      return false;
    }
  }
  return true;
};

const isValidPart2 = passphrase => {
  const sortedWords = [];
  for (let i = 0; i < passphrase.length; i++) {
    if (passphrase.indexOf(passphrase[i]) !== i) {
      return false;
    }
    const sortedWord = passphrase[i].split('').sort().join('');
    if (sortedWords.includes(sortedWord)) {
      return false;
    }
    sortedWords.push(sortedWord);
  }
  return true;
}

fs.readFile('./input.txt', 'utf8', function(err, data) {
  const rows  = data.trim().split('\n').map(row => row.split(' '));
  validPart1 = rows.reduce((acc, row) => acc + isValidPart1(row), 0);
  validPart2 = rows.reduce((acc, row) => acc + isValidPart2(row), 0);
  console.log('Part 1: ' + validPart1);
  console.log('Part 2: ' + validPart2);
});
