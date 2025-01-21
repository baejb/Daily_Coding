const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split("");
let answer = 0;

let people = [];
let hamburgers = [];

for (let i = 0; i < N; i++) {
  if (arr[i] === "P") people.push(i);
  if (arr[i] === "H") hamburgers.push(i);
}

let p = 0,
  h = 0;

while (p < people.length && h < hamburgers.length) {
  if (Math.abs(people[p] - hamburgers[h]) <= K) {
    answer++;
    p++;
    h++;
  } else if (people[p] < hamburgers[h]) {
    p++;
  } else {
    h++;
  }
}

console.log(answer);
