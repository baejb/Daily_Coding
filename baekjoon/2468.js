const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
let arr = [];
let max = 0;
for (let i = 0; i < N; i++) {
    let item = input[i + 1].split(' ').map(Number);
    arr.push(item);
    max = Math.max(max, ...item);
}

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

function bfs(y, x, height, visited) {
    let queue = [[y, x]];
    visited[y][x] = true;

    while (queue.length) {
        let [ny, nx] = queue.shift();
        for (let i = 0; i < 4; i++) {
            let ty = ny + dy[i];
            let tx = nx + dx[i];

            if (ty >= 0 && ty < N && tx >= 0 && tx < N && !visited[ty][tx] && arr[ty][tx] > height) {
                visited[ty][tx] = true;
                queue.push([ty, tx]);
            }
        }
    }
}

function countSafeAreas(height) {
    let visited = Array.from({ length: N }, () => Array(N).fill(false));
    let count = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[i][j] > height && !visited[i][j]) {
                bfs(i, j, height, visited);
                count++;
            }
        }
    }

    return count;
}

let answerArr = [];

for (let k = 0; k <= max; k++) {
    let answer = countSafeAreas(k);
    answerArr.push(answer);
}

console.log(Math.max(...answerArr));
