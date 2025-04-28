const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
// 3: 06

const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const count = Array(100001).fill(0);

let answer = 0;
let left = 0;

for (let right = 0; right < N; right++) {
  count[arr[right]]++;

  while (count[arr[right]] > K) {
    count[arr[left]]--;
    left++;
  }

  answer = Math.max(answer, right - left + 1);
}

console.log(answer);
