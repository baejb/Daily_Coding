const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
let score = input[1].split(' ').map(Number);

score.sort((a,b)=>b-a);

let M = score[0];
//모든 점수를 점수/M*100으로 고쳤다.
let sum = 0;
score.map((x)=>{
  x = x/M*100;
  sum += x;
})
console.log(sum / N);

