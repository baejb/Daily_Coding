const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);
let index = 1;
for (let i = 0; i < T; i++) {
  let W = input[index];
  let K = Number(input[index + 1]);
  console.log(solution(W, K));
  index += 2;
}

function solution(W, K) {
  let answer = [];
  let Wmap = new Map();
  for (let i = 0; i < W.length; i++) {
    if (!Wmap.has(W[i])) Wmap.set(W[i], [i]);
    else {
      Wmap.get(W[i]).push(i);
    }
  }
  let minLength = Infinity;
  let maxLength = -Infinity;

  Wmap.forEach((indices) => {
    if (indices.length >= K) {
      for (let i = 0; i <= indices.length - K; i++) {
        let length = indices[i + K - 1] - indices[i] + 1;
        minLength = Math.min(minLength, length);
        maxLength = Math.max(maxLength, length);
      }
    }
  });

  return minLength === Infinity ? "-1" : `${minLength} ${maxLength}`;
}
