const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  length() {
    return this.size;
  }
  push(x, y) {
    let node = new Node(x, y);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  pop() {
    let temp = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return temp;
  }
}
function sol(map, map2, i, j, visited) {
  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];

  let q = new Queue() // x,y
  q.push(j, i);
  visited[i][j] = true;
  while (q.length()) {
    let cur = q.pop();
    let [cx, cy] = [cur.x, cur.y];
    for (let next = 0; next < 4; next++) {
      let [nx, ny] = [cx + dx[next], cy + dy[next]];
      if (nx >= M || nx < 0 || ny >= N || ny < 0) continue;
      else {
        if (!visited[ny][nx] && map[ny][nx]) {
          q.push(nx, ny);
          visited[ny][nx] = true;
        }
        if (map[ny][nx] === 0) { // 주변이 바다면 빙하가 녹는다.
          map2[cy][cx]--;
          if (map2[cy][cx] < 0) map2[cy][cx] = 0; // 높이는 0보다 줄어들지 않는다.
        }
      }
    }
  }
}
function main() {
  let answer = 0;

  let map = [];
  let map2 = [];
  for (let i = 1; i <= N; i++) {
    map.push(input[i].split(' ').map(Number)); // 원본.
    map2.push(input[i].split(' ').map(Number)); // 업데이트용.
  }

  let cnt = 0; // 빙산이 몇조각인지.
  while (1) {
    let visited = new Array(N).fill(null).map(_ => new Array(M).fill(false));
    cnt = 0;
    for (let i = 1; i < N - 1; i++) {
      for (let j = 1; j < M - 1; j++) {
        if (map[i][j] !== 0 && !visited[i][j]) {
          sol(map, map2, i, j, visited);
          cnt++;
        }
      }
    }
    if (cnt >= 2) {
      //console.log(map2)
      break;
    } // 빙산이 분리됐을경우 종료.

    let check = true; // 빙산이 다 녹았을 경우.
    for (let y = 1; y < N - 1; y++) { // 빙하가 녹은 정보를 업데이트한다.
      for (let x = 1; x < M - 1; x++) {
        map[y][x] = map2[y][x];
        if (map[y][x] !== 0) check = false;
      }
    }
    if (check) return console.log(0); // 얼음이 다 녹았을 경우.
    answer++;
  }
  console.log(answer);
}
main();


/*
const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

let maps = [];
for (let i = 0; i < N; i++) {
    maps[i] = input[i + 1].split(' ').map(Number);
}

let visited = Array.from({ length: N }, () => Array(M).fill(false));
let visited2 = Array.from({ length: N }, () => Array(M).fill(false));
let dy = [-1, 1, 0, 0];
let dx = [0, 0, -1, 1];

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

function startGlobalWarning(y, x) {
    let zero = 0;
    for (let i = 0; i < 4; i++) {
        let ty = y + dy[i];
        let tx = x + dx[i];

        if (ty >= 0 && ty < N && tx >= 0 && tx < M && maps[ty][tx] === 0 && !visited2[ty][tx]) {
            zero++;
        }
    }
    maps[y][x] = Math.max(0, maps[y][x] - zero);
}

function bfs(y, x) {
    let queue = new Deque();
    queue.push([y, x]);
    visited[y][x] = true;

    while (!queue.isEmpty()) {
        let [ny, nx] = queue.pop();
        for (let i = 0; i < 4; i++) {
            let ty = ny + dy[i];
            let tx = nx + dx[i];

            if (ty >= 0 && ty < N && tx >= 0 && tx < M && !visited[ty][tx] && maps[ty][tx] !== 0) {
                visited[ty][tx] = true;
                queue.push([ty, tx]);
            }
        }
    }
}

function countIcebergs() {
    let count = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (maps[i][j] !== 0 && !visited[i][j]) {
                bfs(i, j);
                count++;
            }
        }
    }
    return count;
}

function main() {
    let answer = 0;

    while (countIcebergs() < 2) {
        visited = Array.from({ length: N }, () => Array(M).fill(false));

        visited2 = Array.from({ length: N }, () => Array(M).fill(false));
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (!visited2[i][j] && maps[i][j] !== 0) {
                    visited2[i][j] = true;
                    startGlobalWarning(i, j);
                }
            }
        }

        answer++; // 1년이 지났다
    }

    console.log(answer);
}

main();


*/ 