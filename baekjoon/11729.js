const fs = require("fs");
const { compileFunction } = require("vm");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input);
const result = [];

function hanoi(n, from, to, via) {
  if (n === 1) {
    result.push(`${from} ${to}`);
    return;
  }

  hanoi(n - 1, from, via, to); // 1. n-1개를 보조 기둥으로
  result.push(`${from} ${to}`); // 2. 가장 큰 원판 이동
  hanoi(n - 1, via, to, from); // 3. n-1개를 목적지로 이동
}

hanoi(N, 1, 3, 2);
console.log(result.length);
console.log(result.join("\n"));
