const fs = require("fs");
const { compileFunction } = require("vm");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [S, P] = input[0].split(" ").map(Number);
let str = input[1].split("");
let need = input[2].split(" ").map(Number);
let current = [0, 0, 0, 0];

function checkValid() {
  for (let i = 0; i < 4; i++) {
    if (current[i] < need[i]) return false;
  }
  return true;
}

let answer = 0;

for (let i = 0; i < P; i++) {
  if (str[i] === "A") current[0]++;
  else if (str[i] === "C") current[1]++;
  else if (str[i] === "G") current[2]++;
  else if (str[i] === "T") current[3]++;
}
if (checkValid()) answer++;

for (let i = P; i < S; i++) {
  let pre = str[i - P];
  if (pre === "A") current[0]--;
  else if (pre === "C") current[1]--;
  else if (pre === "G") current[2]--;
  else if (pre === "T") current[3]--;

  let next = str[i];
  if (next === "A") current[0]++;
  else if (next === "C") current[1]++;
  else if (next === "G") current[2]++;
  else if (next === "T") current[3]++;

  if (checkValid()) answer++;
}

console.log(answer);
