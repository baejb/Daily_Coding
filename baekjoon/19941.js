const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split("");
let eaten = Array(N).fill(false);
let answer = 0;

for (let i = 0; i < N; i++) {
  if (arr[i] === "P") {
    for (let j = Math.max(0, i - K); j <= Math.min(N - 1, i + K); j++) {
      if (arr[j] === "H" && !eaten[j]) {
        eaten[j] = true;
        answer++;
        break;
      }
    }
  }
}

console.log(answer);
