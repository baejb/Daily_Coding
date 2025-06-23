const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let answer = 0;
let sum = 0;
let left = 0;
let right = 0;

while (right <= N) {
  if (sum < M) {
    sum += arr[right];
    right++;
  } else if (sum > M) {
    sum -= arr[left];
    left++;
  } else {
    answer++;
    sum += arr[right];
    right++;
  }
}

console.log(answer);
