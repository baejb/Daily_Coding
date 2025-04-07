const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K, P, X] = input[0].split(" ").map(Number);

const numSign = [
  [1, 1, 1, 0, 1, 1, 1], // 0
  [0, 0, 1, 0, 0, 1, 0], // 1
  [1, 0, 1, 1, 1, 0, 1], // 2
  [1, 0, 1, 1, 0, 1, 1], // 3
  [0, 1, 1, 1, 0, 1, 0], // 4
  [1, 1, 0, 1, 0, 1, 1], // 5
  [1, 1, 0, 1, 1, 1, 1], // 6
  [1, 0, 1, 0, 0, 1, 0], // 7
  [1, 1, 1, 1, 1, 1, 1], // 8
  [1, 1, 1, 1, 0, 1, 1], // 9
];

function diffCount(a, b) {
  let cnt = 0;
  for (let i = 0; i < 7; i++) {
    if (numSign[a][i] !== numSign[b][i]) cnt++;
  }
  return cnt;
}

function solution(N, K, P, X) {
  let answer = 0;
  const curNum = String(X).padStart(K, "0"); // 현재 층 K 자리로 만들기

  for (let i = 1; i <= N; i++) {
    if (i === X) continue;

    const targetNum = String(i).padStart(K, "0");
    let totalDiff = 0;

    for (let j = 0; j < K; j++) {
      totalDiff += diffCount(Number(curNum[j]), Number(targetNum[j]));
    }

    if (totalDiff <= P) answer++;
  }
  console.log(answer);
}
solution(N, K, P, X);
