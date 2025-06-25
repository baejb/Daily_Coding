const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((line) => line.split("").map(Number));
let visited = Array.from({ length: N }, () => Array(M).fill(false));

let queue = [];
let dx = [-1, 1, 0, 0];
let dy = [0, 0, 1, -1];

function bfs() {
  let answer = 0;
  queue = [[0, 0, 1]];
  visited[0][0] = true;

  while (queue.length) {
    let [x, y, move] = queue.shift();

    if (x === N - 1 && y === M - 1) {
      answer = move;
      return answer;
    }

    for (let i = 0; i < 4; i++) {
      let tx = dx[i] + x;
      let ty = dy[i] + y;

      if (
        tx >= 0 &&
        tx < N &&
        ty >= 0 &&
        ty < M &&
        arr[tx][ty] === 1 &&
        !visited[tx][ty]
      ) {
        visited[tx][ty] = true;
        queue.push([tx, ty, move + 1]);
      }
    }
  }
}
console.log(bfs());
