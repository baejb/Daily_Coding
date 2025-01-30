const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const S = input[0].split("").map(Number);
let zero = 0;
let one = 0;
S.forEach((num) => {
  if (num === 0) zero++;
  else {
    one++;
  }
});
let halfZero = zero / 2;
let halfOne = one / 2;

let answer = [];
let zeroCnt = 0;
let oneCnt = 0;
for (let i = 0; i < S.length; i++) {
  if (S[i] === 1) {
    if (oneCnt < halfOne) {
      oneCnt++;
      continue;
    }
  }
  answer.push(S[i]);
}
let finalAnswer = [];
for (let i = answer.length - 1; i >= 0; i--) {
  if (answer[i] === 0) {
    if (zeroCnt < halfZero) {
      zeroCnt++;
      continue;
    }
  }
  finalAnswer.push(answer[i]);
}

console.log(finalAnswer.reverse().join(""));
