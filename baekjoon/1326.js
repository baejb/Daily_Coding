// 5
// 1 2 2 1 2
// 1 5

const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\n');

const N = input[0]; // 첫 번째 줄의 값을 N, M, V로 분리하여 저장
let stone = input[1].split(' ').map(Number);
let [a, b] = input[2].split(' ').map(Number);


const visited = new Array(N + 1).fill(false);

function bfs(start) {
  const queue = [start];
  visited[start] = true;

  while (queue.length > 0) {
    let current = queue.shift();

    if (current === b) {
      return visited[current] - 1;
    }

    for (let i = 1; i <= N; i++) {
      const next = current + stone[i] * i;

      if (next <= N && !visited[next]) {
        visited[next] = visited[current] + 1;
        queue.push(next);
      } else {
        break;
      }
    }

    for (let i = 1; i <= N; i++) {
      const next = current - stone[i]  * i;

      if (next >= 1 && !visited[next]) {
        visited[next] = visited[current] + 1;
        queue.push(next);
      } else {
        break;
      }
    }
  }

  return -1;
}

console.log(bfs(a));




