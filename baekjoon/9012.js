const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 9: 55
const N = Number(input[0]);

function checkVPS(arr) {
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      if (arr[i] === "(") {
        stack.push(arr[i]);
        continue;
      } else {
        return "NO";
      }
    }
    if (arr[i] === "(") {
      if (stack[stack.length - 1] === "(") {
        stack.push(arr[i]);
      } else {
        stack.pop();
      }
    } else {
      if (stack[stack.length - 1] === ")") {
        stack.push(arr[i]);
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length > 0) {
    return "NO";
  } else {
    return "YES";
  }
}
for (let i = 1; i <= N; i++) {
  console.log(checkVPS(input[i].split("")));
}
