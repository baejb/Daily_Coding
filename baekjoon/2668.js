const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const nums = [0, ...input.slice(1).map(Number)];
let answer = [];
function dfs(cur, visited, path, start) {
  visited[cur] = true;
  path.push(cur);
  let next = nums[cur];

  if (!visited[next]) {
    dfs(next, visited, path, start);
  } else {
    if (next === start) {
      answer.push(...path);
    }
  }
}

for (let i = 1; i <= N; i++) {
  const visited = Array(N + 1).fill(false);
  const path = [];
  dfs(i, visited, path, i);
}

answer = [...new Set(answer)].sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join("\n"));
