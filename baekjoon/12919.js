const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const S = input[0];
const T = input[1];
let answer = 0;
function solution(s) {
  if (s === T) {
    answer = 1;
    return;
  }
  if (s.length >= T.length) {
    return;
  }
  if (!T.includes(s) && !T.includes(s.split("").reverse().join(""))) {
    return;
  }
  solution(s + "A");
  solution(makeArrReverse(s));
}
function makeArrReverse(s) {
  let arr = s.split("");
  arr.push("B");
  arr.reverse();
  return arr.join("");
}
solution(S);
console.log(answer);
