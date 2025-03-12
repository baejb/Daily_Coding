const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let left = 0;
let right = N - 1;
let result = [0, 0];
let closestSum = Infinity;

while (left < right) {
  let sum = arr[left] + arr[right];

  if (Math.abs(sum) < Math.abs(closestSum)) {
    closestSum = sum;
    result = [arr[left], arr[right]];
  }
  if (sum < 0) left++;
  else right--;
}

console.log(result.join(" "));
