const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [H, W] = input[0].split(" ").map(Number);
const height = input[1].split(" ").map(Number);
let block = Array.from({ length: H }, () => Array(W).fill(0));

height.forEach((h, index) => {
  for (let i = H - 1; i >= H - h; i--) {
    block[i][index] = 1;
  }
});

let answer = 0;

block.map((wall) => {
  let start = -1;
  for (let i = 0; i < wall.length; i++) {
    if (wall[i] === 1) {
      if (start !== -1) {
        answer += i - start - 1;
      }
      start = i;
    }
  }
});

console.log(answer);
