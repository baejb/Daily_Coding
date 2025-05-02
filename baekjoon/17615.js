const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
//7
const N = Number(input[0]);
const arr = input[1].split("");

function solution(color, dir) {
  let answer = 0;
  let state = true;
  if (dir === "left") {
    for (let i = 0; i < arr.length; i++) {
      if (state && arr[i] === color) continue;
      else state = false;
      if (!state && arr[i] === color) answer++;
    }
  } else {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (state && arr[i] === color) continue;
      else state = false;
      if (!state && arr[i] === color) answer++;
    }
  }
  return answer;
}

let answer = Math.min(
  solution("R", "left"),
  solution("R", "right"),
  solution("B", "left"),
  solution("B", "right")
);
console.log(answer);

// answer = min(
//   왼쪽으로 R 몰기 위해 움직여야 할 R 수,
//   오른쪽으로 R 몰기 위해 움직여야 할 R 수,
//   왼쪽으로 B 몰기 위해 움직여야 할 B 수,
//   오른쪽으로 B 몰기 위해 움직여야 할 B 수
// )
