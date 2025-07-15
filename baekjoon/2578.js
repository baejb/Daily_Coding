const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const bingo = [];
const answer = [];
const isBingo = Array.from({ length: 5 }, () => Array(5).fill(false));
for (let i = 0; i < 5; i++) {
  bingo.push(input[i].split(" ").map(Number));
}
for (let i = 5; i < 10; i++) {
  answer.push(input[i].split(" ").map(Number));
}

function checkRow(arr) {
  let canBingo = 0;
  let count = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (arr[i][j]) count++;
    }
    if (count === 5) {
      canBingo++;
    }
    count = 0;
  }
  return canBingo;
}
function checkColumn(arr) {
  let canBingo = 0;
  let count = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (arr[j][i]) count++;
    }
    if (count === 5) {
      canBingo++;
    }
    count = 0;
  }
  return canBingo;
}
function checkCross(arr) {
  let canBingo = 0;
  let count = 0;
  for (let i = 0; i < 5; i++) {
    if (arr[i][i]) count++;
  }
  if (count === 5) {
    canBingo++;
  }
  count = 0;
  for (let i = 0; i < 5; i++) {
    if (arr[i][4 - i]) count++;
  }
  if (count === 5) {
    canBingo++;
  }
  return canBingo;
}
let totalBingo = 0;
let count = 0;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    count++;
    let now = answer[i][j];

    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (bingo[r][c] === now) {
          isBingo[r][c] = true;
          break;
        }
      }
    }
    totalBingo = checkRow(isBingo) + checkColumn(isBingo) + checkCross(isBingo);

    if (totalBingo >= 3) {
      console.log(count);
      return;
    }
  }
}
