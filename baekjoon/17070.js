const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input[0]);
let walls = input.slice(1).map(x => x.split(" ").map(Number));

let answer = 0;

function dfs(x, y, dir) {
    if (x === N - 1 && y === N - 1) {
        answer++;
        return;
    }

    if (dir === 'r' || dir === 'd') {
        if (y + 1 < N && walls[x][y + 1] === 0) {
            dfs(x, y + 1, 'r');
        }
    }


    if (dir === 'c' || dir === 'd') {
        if (x + 1 < N && walls[x + 1][y] === 0) {
            dfs(x + 1, y, 'c');
        }
    }

  
    if (x + 1 < N && y + 1 < N && walls[x][y + 1] === 0 && walls[x + 1][y] === 0 && walls[x + 1][y + 1] === 0) {
        dfs(x + 1, y + 1, 'd');
    }
}


dfs(0, 1, 'r');

console.log(answer);
