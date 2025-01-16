const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const days = input[1].split(" ").map(Number);
let highDay = 0;
let period = 0;
let sumDays = [];
if (Math.max(...days) === 0) {
  console.log("SAD");
} else {
  let curSum = 0;
  for (let i = 0; i < X; i++) {
    curSum += days[i];
  }
  let max = curSum;
  let count = 1;
  for (let i = X; i < N; i++) {
    curSum = curSum - days[i - X] + days[i];

    if (max < curSum) {
      max = curSum;
      count = 1;
    } else if (max === curSum) {
      count++;
    }
  }
  console.log(max);
  console.log(count);
}
//슬라이딩 윈도우
