const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const before = input[1].split("").map(Number);
const after = input[2].split("").map(Number);

// 스위치를 누르는 함수
function toggle(arr, idx) {
  [idx - 1, idx, idx + 1].forEach((i) => {
    if (i >= 0 && i < N) arr[i] = 1 - arr[i];
  });
}

function solve(before, after, pressFirst) {
  const temp = [...before];
  let cnt = 0;

  if (pressFirst) {
    toggle(temp, 0);
    cnt++;
  }

  for (let i = 1; i < N; i++) {
    if (temp[i - 1] !== after[i - 1]) {
      toggle(temp, i);
      cnt++;
    }
  }

  return temp.join("") === after.join("") ? cnt : Infinity;
}

const result = Math.min(
  solve(before, after, false),
  solve(before, after, true)
);

console.log(result === Infinity ? -1 : result);
