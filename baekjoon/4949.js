const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else if (str[i] === "[") stack.push(str[i]);

    if (stack.length === 0) {
      if (str[i] === ")" || str[i] === "]") return "no";
    }
    if (str[i] === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
        continue;
      } else if (stack[stack.length - 1] === "[") {
        return "no";
      }
    } else if (str[i] === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
        continue;
      } else if (stack[stack.length - 1] === "(") {
        return "no";
      }
    }
  }
  if (stack.length === 0) return "yes";
  else return "no";
}
for (let i = 0; i < input.length - 1; i++) {
  let str = input[i].split("");
  if (str === ".") break;
  console.log(solution(str));
}
