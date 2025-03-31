const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let visited = new Array(N + 1).fill(false);
let answer = 0;
let graph = {};
for (let i = 1; i <= M; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  if (!graph[a]) graph[a] = [];
  if (!graph[b]) graph[b] = [];
  graph[a].push(b);
  graph[b].push(a);
}

function dfs(a) {
  visited[a] = true;

  for (let next of graph[a] || []) {
    if (!visited[next]) {
      dfs(next);
    }
  }
}
for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    answer++;
  }
}
console.log(answer);
