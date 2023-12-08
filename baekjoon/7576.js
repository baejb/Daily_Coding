const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);
let maps = [];
for (let i = 1; i < N + 1; i++) {
    maps.push(input[i].split(' ').map(Number));
}

let dy = [-1, 1, 0, 0];
let dx = [0, 0, -1, 1];
let answer = 0;

class Deque {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    push(element) {
        this.queue[this.rear++] = element;
    }

    pop() {
        if (this.front === this.rear) return undefined;
        const element = this.queue[this.front];
        delete this.queue[this.front++];
        return element;
    }

    isEmpty() {
        return this.front === this.rear;
    }
}

function bfs() {
    let queue = new Deque();

    // 익은 토마토의 좌표를 큐에 추가
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (maps[i][j] === 1) {
                queue.push([i, j, 0]);
            }
        }
    }

    let days = 0;

    while (!queue.isEmpty()) {
        let [ny, nx, day] = queue.pop();
        for (let i = 0; i < 4; i++) {
            let ty = ny + dy[i];
            let tx = nx + dx[i];

            if (ty >= 0 && ty < N && tx >= 0 && tx < M && maps[ty][tx] === 0) {
                maps[ty][tx] = 1;
                queue.push([ty, tx, day + 1]);
                days = day + 1;
            }
        }
    }

    return days;
}

answer = bfs();

// 모든 토마토가 익은 상태가 아니라면 -1 출력
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (maps[i][j] === 0) {
            answer = -1;
            break;
        }
    }
}

console.log(answer);
