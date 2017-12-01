const fs = require('fs');

fs.readFile('./input.txt', 'utf8', function(err, data) {
  const captcha  = data.trim().split('');
  let sum = 0;
  let prev = '';
  for (let i = 0; i < captcha.length; i++) {
    const prev = i === 0 ? captcha[captcha.length-1] : captcha[i-1];
    if (captcha[i] === prev) {
      sum += +prev;
    }
  }
  console.log('Part 1: ' + sum);

  sum = 0;
  for (let i = 0; i < captcha.length; i++) {
    let compareTo = i + (captcha.length / 2);
    if (compareTo >= captcha.length) {
      compareTo -= captcha.length
    }
    if (captcha[i] === captcha[compareTo]) {
      sum += +captcha[compareTo];
    }
  }
  console.log('Part 2: ' + sum);
});
