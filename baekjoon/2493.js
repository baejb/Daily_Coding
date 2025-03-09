const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const topArr = input[1].split(" ").map(Number);
let answer = new Array(N).fill(0);
let stack = [];

for (let i = 0; i < N; i++) {
  while (stack.length > 0 && topArr[stack[stack.length - 1]] < topArr[i]) {
    stack.pop();
  }

  if (stack.length > 0) {
    answer[i] = stack[stack.length - 1] + 1;
  }

  stack.push(i);
}
console.log(answer.join(" "));
