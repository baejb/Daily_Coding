const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const M = Number(input[2]);

let low = 0;
let high = Math.max(...arr);
let answer = 0;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);

  if (arr.reduce((acc, cur) => acc + Math.min(mid, cur), 0) > M) {
    high = mid - 1;
  } else {
    answer = mid;
    low = mid + 1;
  }
}
console.log(answer);
