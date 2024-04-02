const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const N = Number(input[0]);

let board = Array.from({ length: N }, () => Array(N).fill(false));

let answer = 0;
// 퀸은 같은 열 같은 행 대각선 방향에 있는 퀸을 공격할 수 있음 따라서 그 외에 곳에 퀸을 N개 배치하는 경우를 구해야함 
// dfs 자체가 행을 기준으로 실행됨 (한 행에는 무조건 한개의 퀸만 올수있으므로)
// isSafe(x,y) 함수는 같은 열 왼쪽 위 대각선 , 오른쪽 위 대각선에 있는지만 확인 
//-> 위에서부터 아래로 실행되므로 위에서 겹치는 부분만 따지면 됨  
function isSafe(x, y) {
    // 같은 열에 있는지 확인
    for (let i = 0; i < x; i++) {
        if (board[i][y]) return false;
    }
    // 왼쪽 위 대각선에 있는지 확인
    for (let i = x, j = y; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j]) return false;
    }
    // 오른쪽 위 대각선에 있는지 확인
    for (let i = x, j = y; i >= 0 && j < N; i--, j++) {
        if (board[i][j]) return false;
    }
    return true;
}

function dfs(x) {
    if (x === N) {
        answer++;
        return;
    }
    for (let y = 0; y < N; y++) {
        if (isSafe(x, y)) {
            board[x][y] = true;
            dfs(x + 1);
            board[x][y] = false; // 놓았던 말 제거 ,백트래킹
        }
    }
}

dfs(0);
console.log(answer);
