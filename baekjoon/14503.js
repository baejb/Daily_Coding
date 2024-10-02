const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input[0].split(" ").map(Number); // N: 세로, M: 가로
let [startX, startY, startDirection] = input[1].split(" ").map(Number); // 로봇 시작 위치와 방향
let points = [];
for (let i = 2; i < input.length; i++) {
    points.push(input[i].split(" ").map(Number)); // 맵 정보
}

// 방향 정보: 0=북, 1=동, 2=남, 3=서
let dx = [-1, 0, 1, 0]; // x 축 이동: 북(-1), 동(0), 남(1), 서(0)
let dy = [0, 1, 0, -1]; // y 축 이동: 북(0), 동(1), 남(0), 서(-1)
let visited = Array.from({ length: N }, () => Array(M).fill(false)); // 방문 체크 배열

// BFS 탐색
function bfs() {
    let queue = [[startX, startY, startDirection]]; // 초기 위치와 방향
    visited[startX][startY] = true; // 시작 위치 방문 체크
    let cleanedCount = 1; // 청소한 칸의 수 (시작 위치 포함)

    while (queue.length) {
        let [x, y, direction] = queue.shift(); // 현재 위치와 방향

        // 로봇이 청소하는 곳을 탐색하면서 네 방향을 확인
        let found = false;
        for (let i = 0; i < 4; i++) {
            // 현재 방향에서 왼쪽 방향으로 회전
            direction = (direction + 3) % 4; // 왼쪽으로 회전
            let nx = x + dx[direction];
            let ny = y + dy[direction];

            // 범위 내에 있고, 청소하지 않은 공간인 경우
            if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[nx][ny] && points[nx][ny] === 0) {
                visited[nx][ny] = true; // 방문 체크
                queue.push([nx, ny, direction]); // 새로운 위치와 방향 큐에 추가
                cleanedCount++; // 청소한 칸 증가
                found = true; // 청소할 수 있는 칸을 찾음
                break; // 왼쪽으로 회전하여 이동했으므로 종료
            }
        }

        // 네 방향 모두 청소할 수 없는 경우
        if (!found) {
            // 후진
            let backX = x - dx[direction];
            let backY = y - dy[direction];

            // 뒤로 후진할 수 있는 경우에만 후진
            if (backX >= 0 && backY >= 0 && backX < N && backY < M && points[backX][backY] === 0) {
                queue.push([backX, backY, direction]); // 후진 위치와 방향 큐에 추가
            } else {
                break; // 후진도 불가능한 경우 종료
            }
        }
    }

    return cleanedCount; // 청소한 칸의 수 반환
}

// 결과 출력
console.log(bfs());
