const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let keyword = new Set();
let letter = [];
let answer = [];
for (let i = 1; i <= N; i++) {
  keyword.add(input[i]);
}
for (let i = N + 1; i < N + M + 1; i++) {
  letter.push(input[i].split(","));
}
for (let i = 0; i < letter.length; i++) {
  for (let j = 0; j < letter[i].length; j++) {
    if (keyword.has(letter[i][j])) {
      keyword.delete(letter[i][j]);
    }
  }
  answer.push(keyword.size);
}
console.log(answer.join("\n"));
