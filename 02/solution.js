const fs = require('fs');

const sum = (a, b) => a + b;
const max = (a, b) => Math.max(a, b);
const min = (a, b) => Math.min(a, b);
const toNumber = val => +val;
const sortDesc = (a, b) => {
  if (a < b) {
    return 1
  }
  if (a > b) {
    return -1
  }
  return 0
};

const getRowChecksumPart1 = row =>
  row.reduce(max, Number.NEGATIVE_INFINITY) - row.reduce(min, Number.POSITIVE_INFINITY);

const getRowChecksumPart2 = row => {
  // Avoid side-effects
  let copy = row.slice()
  // Numbers should only be divided by those less than them if we want to get a whole number
  copy.sort(sortDesc)
  for (let i = 0; i < copy.length - 1; i++) {
    for (let j = i + 1; j < copy.length; j++) {
      const result = copy[i] / copy[j];
      if (Number.isInteger(result)) {
        return result;
      }
    }
  }
};

fs.readFile('./input.txt', 'utf8', function(err, data) {
  const rows  = data.trim().split('\n').map(row => row.split('\t').map(toNumber));
  const checksumPart1 = rows.map(getRowChecksumPart1).reduce(sum, 0);
  const checksumPart2 = rows.map(getRowChecksumPart2).reduce(sum, 0);
  console.log('Part 1: ' + checksumPart1);
  console.log('Part 2: ' + checksumPart2);
});
