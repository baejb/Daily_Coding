const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let level = [];
for (let i = 1; i <= N; i++) {
  let [name, value] = input[i].split(" ");
  level.push([name, Number(value)]);
}
level.sort((a, b) => a[1] - b[1]); // 레벨을 기준으로 정렬

let power = [];
for (let i = N + 1; i <= N + M; i++) {
  power.push(Number(input[i]));
}

function binarySearch(target) {
  let left = 0,
    right = level.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (level[mid][1] >= target) {
      right = mid; // 더 낮은 값이 있는지 확인
    } else {
      left = mid + 1;
    }
  }
  return level[left][0]; // 가장 처음으로 찾은 이름 반환
}

let result = [];
for (let p of power) {
  result.push(binarySearch(p));
}

console.log(result.join("\n"));
