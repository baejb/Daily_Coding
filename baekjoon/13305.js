const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = BigInt(input[0]);
const dist = input[1].split(" ").map(BigInt);
const charge = input[2].split(" ").map(BigInt);

let answer = 0n;
let minCharge = charge[0];
for (let i = 0; i < dist.length; i++) {
  if (charge[i] < minCharge) {
    minCharge = charge[i];
  }
  answer += minCharge * dist[i];
}
console.log(answer.toString());
