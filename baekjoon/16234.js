const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

//12:50
let [N, L, R] = input[0].split(" ");
let country = [];
for (let i = 1; i <= N; i++) {
  country.push(input[i].split(" ").map(Number));
}

let dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let days = 0;

while (true) {
  let visited = Array.from({ length: N }, () => Array(N).fill(false));
  let isMoved = false;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        const union = bfs(i, j, visited);
        if (union.length > 1) {
          let sum = 0;
          union.forEach(([x, y]) => {
            sum += country[x][y];
          });
          let avg = Math.floor(sum / union.length);
          union.forEach(([x, y]) => {
            country[x][y] = avg;
          });
          isMoved = true;
        }
      }
    }
  }

  if (!isMoved) break;
  days++;
}

console.log(days);

function bfs(x, y, visited) {
  let queue = [[x, y]];
  let union = [[x, y]];
  visited[x][y] = true;

  while (queue.length) {
    let [nx, ny] = queue.shift();

    dir.forEach((p) => {
      let tx = nx + p[0];
      let ty = ny + p[1];

      if (tx >= 0 && tx < N && ty >= 0 && ty < N && !visited[tx][ty]) {
        if (calcBoundary(nx, ny, tx, ty)) {
          queue.push([tx, ty]);
          visited[tx][ty] = true;
          union.push([tx, ty]);
        }
      }
    });
  }

  return union;
}

function calcBoundary(x1, y1, x2, y2) {
  return (
    Math.abs(country[x1][y1] - country[x2][y2]) >= L &&
    Math.abs(country[x1][y1] - country[x2][y2]) <= R
  );
}
