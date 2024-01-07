const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < input.length ; i++) {
  if(input[i]== 0){
    break;
  }
  const result = palindrome(input[i]);
  console.log(result);
}

function palindrome(num) {
  if(num[0]=== '0'){
    return 'no';
  }
  const len = num.length;

  if (len === 1) {
    return 'yes';
  }

  let mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (num[i] !== num[len - 1 - i]) {
      return 'no';
    }
  }

  return 'yes';
}
