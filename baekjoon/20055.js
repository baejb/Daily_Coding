const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
let robot = Array(2 * N).fill(false); // 로봇 위치 저장 (true: 로봇 있음, false: 없음)
let answer = 0;

function countDurability(arr) {
  return arr.filter((x) => x === 0).length >= K;
}

while (!countDurability(A)) {
  answer++;

  // 1. 벨트와 로봇을 함께 회전
  A.unshift(A.pop());
  robot.unshift(robot.pop());
  robot[N - 1] = false;

  for (let i = N - 2; i >= 0; i--) {
    if (robot[i] && !robot[i + 1] && A[i + 1] > 0) {
      robot[i] = false;
      robot[i + 1] = true;
      A[i + 1]--;
    }
  }
  robot[N - 1] = false;

  if (A[0] > 0) {
    robot[0] = true;
    A[0]--;
  }
}

console.log(answer);
