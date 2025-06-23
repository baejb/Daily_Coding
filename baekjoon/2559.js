const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let sum = 0;
for (let i = 0; i < K; i++) sum += arr[i];

let maxSum = sum;
for (let i = K; i < N; i++) {
  sum = sum - arr[i - K] + arr[i];
  maxSum = Math.max(maxSum, sum);
}
console.log(maxSum);
