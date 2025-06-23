const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
let arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);

if (arr[0] > 0) {
  console.log(`${arr[0]} ${arr[1]}`);
  return;
}
if (arr[N - 1] < 0) {
  console.log(`${arr[N - 2]} ${arr[N - 1]}`);
  return;
}

let answerLeft = Infinity;
let answerRight = Infinity;
let left = 0;
let right = N - 1;
let sum = 0;
let min = Infinity;

while (left < right) {
  sum = arr[left] + arr[right];
  if (sum === 0) {
    console.log(`${arr[left]} ${arr[right]}`);
    return;
  }
  if (Math.abs(sum) < Math.abs(min)) {
    answerLeft = arr[left];
    answerRight = arr[right];
    min = sum;
  }

  if (sum < 0) {
    left++;
  } else if (sum > 0) {
    right--;
  }
}
console.log(`${answerLeft} ${answerRight}`);
