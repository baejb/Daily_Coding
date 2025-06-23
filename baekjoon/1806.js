const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
let minLen = Infinity;
let sum = 0;
let left = 0;

for (let right = 0; right < N; right++) {
  sum += arr[right];

  while (sum >= S) {
    minLen = Math.min(minLen, right - left + 1);
    sum -= arr[left];
    left++;
  }
}
console.log(minLen === Infinity ? 0 : minLen);
