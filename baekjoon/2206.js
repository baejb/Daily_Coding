const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(" ").map(Number);
let walls = [];
for (let i = 1; i < input.length; i++) {
    let row = input[i].split("").map(Number);
    walls.push(row);
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let visited = Array.from({ length: N }, () => Array.from({ length: M }, () => [false, false]));

class Deque {
    constructor() {
        this.front = [];
        this.back = [];
    }

    pushFront(value) {
        this.front.push(value);
    }

    pushBack(value) {
        this.back.push(value);
    }

    popFront() {
        if (this.front.length === 0) {
            while (this.back.length) {
                this.front.push(this.back.pop());
            }
        }
        return this.front.pop();
    }

    isEmpty() {
        return this.front.length === 0 && this.back.length === 0;
    }
}

function bfs() {
    let deque = new Deque();
    deque.pushBack([0, 0, 0, 1]); // x, y, 벽 부순 횟수, 이동 횟수
    visited[0][0][0] = true;

    while (!deque.isEmpty()) {
        let [x, y, cnt, move] = deque.popFront();

        if (x === N - 1 && y === M - 1) {
            return move;
        }

        for (let i = 0; i < 4; i++) {
            let tx = x + dx[i];
            let ty = y + dy[i];

            if (tx >= 0 && tx < N && ty >= 0 && ty < M) {
                if (walls[tx][ty] === 0 && !visited[tx][ty][cnt]) {
                    visited[tx][ty][cnt] = true;
                    deque.pushBack([tx, ty, cnt, move + 1]);
                }
                if (walls[tx][ty] === 1 && cnt === 0 && !visited[tx][ty][cnt + 1]) {
                    visited[tx][ty][cnt + 1] = true;
                    deque.pushBack([tx, ty, cnt + 1, move + 1]);
                }
            }
        }
    }
    return -1;
}

console.log(bfs());
