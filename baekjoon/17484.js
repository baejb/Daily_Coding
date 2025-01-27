const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((line) => line.split(" ").map(Number));

// 3차원 DP 배열 초기화: dp[행][열][이전 방향]
let dp = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Array(3).fill(Infinity))
);

for (let j = 0; j < M; j++) {
  dp[0][j][0] = arr[0][j];
  dp[0][j][1] = arr[0][j];
  dp[0][j][2] = arr[0][j];
}

for (let i = 1; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (j > 0)
      dp[i][j][0] =
        Math.min(dp[i][j][0], dp[i - 1][j - 1][1], dp[i - 1][j - 1][2]) +
        arr[i][j];
    dp[i][j][1] =
      Math.min(dp[i][j][1], dp[i - 1][j][0], dp[i - 1][j][2]) + arr[i][j];
    if (j < M - 1)
      dp[i][j][2] =
        Math.min(dp[i][j][2], dp[i - 1][j + 1][0], dp[i - 1][j + 1][1]) +
        arr[i][j];
  }
}

let result = Infinity;
for (let j = 0; j < M; j++) {
  result = Math.min(result, dp[N - 1][j][0], dp[N - 1][j][1], dp[N - 1][j][2]);
}

console.log(result);
