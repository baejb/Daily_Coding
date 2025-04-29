const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
//
const [N, D] = input[0].split(" ").map(Number);
let shortcuts = [];

for (let i = 1; i <= N; i++) {
  let [start, end, cost] = input[i].split(" ").map(Number);
  if (end <= D) {
    shortcuts.push({ start, end, cost });
  }
}

let dp = new Array(D + 1).fill(Infinity);
dp[0] = 0;

for (let i = 0; i <= D; i++) {
  if (i > 0) {
    dp[i] = Math.min(dp[i - 1] + 1, dp[i]);
  }

  for (let { start, end, cost } of shortcuts) {
    if (start === i) {
      dp[end] = Math.min(dp[end], dp[start] + cost);
    }
  }
}

console.log(dp[D]);
