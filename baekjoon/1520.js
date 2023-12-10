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
    if (y === M - 1 && x === N - 1) { //종료조건1 : 마지막 좌표까지 도달함 
        return 1;
    }

    if (visited[y][x] !== -1) { //만약 처음 방문한 곳이 아니면 저장되어있던 visited[y][x] 값을 리턴 , 중복 계산을 방지 
        return visited[y][x];
    }

    visited[y][x] = 0; //처음 방문한 곳은 0으로 초기화 

    for (let i = 0; i < 4; i++) {
        let ty = y + dy[i];
        let tx = x + dx[i];

        if (ty >= 0 && ty < M && tx >= 0 && tx < N && maps[ty][tx] < maps[y][x]) {
            visited[y][x] += dfs(ty, tx); //dfs는 실행 후 visited[y][x] 값을 리턴하므로 리턴한 값을 더해주어 몇가지 경로로 실행되었는지 확인가능함 
        }
    }

    return visited[y][x];
}

console.log(dfs(0, 0)); // 저장된 visited[0][0] 값을 출력 (경로의 수가 출력됨 )
