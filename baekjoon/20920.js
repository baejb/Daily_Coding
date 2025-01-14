const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let words = new Map();

for (let i = 1; i < input.length; i++) {
  const word = input[i];
  if (word.length >= M) {
    words.set(word, (words.get(word) || 0) + 1);
  }
}

let answer = [...words.keys()];

answer.sort((a, b) => {
  const countDiff = words.get(b) - words.get(a);
  if (countDiff !== 0) return countDiff;

  const lengthDiff = b.length - a.length;
  if (lengthDiff !== 0) return lengthDiff;

  return a.localeCompare(b);
});

console.log(answer.join("\n"));
