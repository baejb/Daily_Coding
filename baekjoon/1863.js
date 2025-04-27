const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const stack = [];
let answer = 0;

for (let i = 1; i <= n; i++) {
  const [x, height] = input[i].split(" ").map(Number);

  while (stack.length && stack[stack.length - 1] > height) {
    stack.pop();
    answer++;
  }

  if (stack.length === 0 || stack[stack.length - 1] < height) {
    if (height !== 0) {
      stack.push(height);
    }
  }
}

answer += stack.length;
console.log(answer);
