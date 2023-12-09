const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [R, C] = input[0].split(' ').map(Number);
//인풋받는부분 
let maps = Array.from({ length: R }, () => Array(C).fill(''));
let visited = Array.from({ length: R }, () => Array(C).fill(false));
for (let i = 1; i <= R; i++) {
    maps[i - 1] = input[i].split(''); // 한 단어씩 저장
}

let dy = [-1, 1, 0, 0];
let dx = [0, 0, -1, 1];
let answer = [];

function dfs(y, x) {
    if (visited[y][x]) return 0; //방문한곳이면 종료 

    visited[y][x] = true;
    answer.push(maps[y][x]); //answer 에 push  -> 중복된 문자를 판별하기 위함 
    let result = 1; // 현재 위치 포함이므로 result 는 1 여기서 result 는 이동거리를 나타내는 변수 

    for (let i = 0; i < 4; i++) { // 상하좌우 이동시작 
        let ty = y + dy[i];
        let tx = x + dx[i];
        if (ty >= 0 && ty < R && tx >= 0 && tx < C && !visited[ty][tx]) { //방문하지 않은 좌표일때 
            if (!answer.includes(maps[ty][tx])) { // 중복되지 않은 문자일 때 
                result = Math.max(result, 1 + dfs(ty, tx)); // dfs를 이동한 좌표로 실행하며 +1 을 해줌 (이동했으므로) , 최댓값을 계산해야하니까 result 값이랑 비교해서 더 큰 값이 result 가 되도록 함 
            }
        }
    }

    // 백트래킹 
    visited[y][x] = false;
    answer.pop();
    
    return result;
}

console.log(dfs(0,0));
