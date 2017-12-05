const fs = require('fs');

const toNumber = val => +val;

fs.readFile('./input.txt', 'utf8', function(err, data) {
  const rows  = data.trim().split('\n').map(toNumber);

  let jmps = rows.slice();
  let i = 0;
  let steps = 0;
  while (i >= 0 && i < jmps.length) {
    const jmp = jmps[i];
    jmps[i]++;
    steps++;
    i += jmp;
  }
  console.log('Part 1: ' + steps);


  jmps = rows.slice();
  i = 0;
  steps = 0;
  while (i >= 0 && i < jmps.length) {
    const jmp = jmps[i];
    if (jmps[i] >= 3) {
      jmps[i]--;
    } else {
      jmps[i]++;
    }
    steps++;
    i += jmp;
  }
  console.log('Part 2: ' + steps);
});
