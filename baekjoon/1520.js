const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);

let maps = Array.from({ length: M }, () => Array(N).fill(0));
let visited = Array.from({ length: M }, () => Array(N).fill(-1));

for (let i = 1; i <= M; i++) {
    maps[i - 1] = input[i].split(' ').map(Number);
}

let dy = [-1, 1, 0, 0];
let dx = [0, 0, -1, 1];

function dfs(y, x) {
    if (y === M - 1 && x === N - 1) {
        return 1;
    }

    if (visited[y][x] !== -1) {
        return visited[y][x];
    }

    visited[y][x] = 0;

    for (let i = 0; i < 4; i++) {
        let ty = y + dy[i];
        let tx = x + dx[i];

        if (ty >= 0 && ty < M && tx >= 0 && tx < N && maps[ty][tx] < maps[y][x]) {
            visited[y][x] += dfs(ty, tx);
        }
    }

    return visited[y][x];
}

console.log(dfs(0, 0));
