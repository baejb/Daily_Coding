const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\n');
const [R, C] = input[0].split(' ').map(Number);

let maps = Array.from({ length: R }, () => Array(C).fill(''));
let visited = Array.from({ length: R }, () => Array(C).fill(false));
for (let i = 1; i <= R; i++) {
    maps[i - 1] = input[i].split(''); // 한 단어씩 저장
}

let dy = [-1, 1, 0, 0];
let dx = [0, 0, -1, 1];
let answer = [];

function dfs(y, x) {
    if (visited[y][x]) return ;

    visited[y][x] = true;
    answer.push(maps[y][x]);
    let result = 1; // 현재 위치 포함

    for (let i = 0; i < 4; i++) {
        let ty = y + dy[i];
        let tx = x + dx[i];
        if (ty >= 0 && ty < R && tx >= 0 && tx < C && !visited[ty][tx]) {
            if (!answer.includes(maps[ty][tx])) {
                result = Math.max(result, 1 + dfs(ty, tx));
            }
        }
    }

    // 백트래킹
    visited[y][x] = false;
    answer.pop();
    
    return result;
}

console.log(dfs(0,0));
