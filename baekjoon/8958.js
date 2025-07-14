const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = Number(input[0]);
function checkScore(arr) {
  let total = 0;
  let zeroScore = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "O") {
      zeroScore++;
      total += zeroScore;
    } else {
      zeroScore = 0;
    }
  }
  return total;
}
for (let i = 1; i <= N; i++) {
  console.log(checkScore(input[i].split("")));
}
