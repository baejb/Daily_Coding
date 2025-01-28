const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const baseWord = input[1];
const words = input.slice(2);

let answer = 0;

for (const word of words) {
  if (isSimilar(baseWord, word)) {
    answer++;
  }
}

console.log(answer);

function isSimilar(word1, word2) {
  const count1 = getCharCount(word1);
  const count2 = getCharCount(word2);

  let diff = 0;

  for (const char in count1) {
    diff += Math.abs((count1[char] || 0) - (count2[char] || 0));
  }

  for (const char in count2) {
    if (!(char in count1)) {
      diff += count2[char];
    }
  }

  return diff <= 2 && Math.abs(word1.length - word2.length) <= 1;
}

function getCharCount(word) {
  const count = {};
  for (const char of word) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}
