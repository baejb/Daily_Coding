const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, E] = input[0].split(" ").map(Number);
let graph = {};

// 그래프 초기화
for (let i = 1; i < E + 1; i++) {
    let [n1, n2, w] = input[i].split(" ").map(Number);
    if (!graph[n1]) graph[n1] = [];
    if (!graph[n2]) graph[n2] = [];
    graph[n1].push({ to: n2, weight: w });
    graph[n2].push({ to: n1, weight: w });
}

let [v1, v2] = input[input.length - 1].split(" ").map(Number);

// 다익스트라 함수 정의
function dijkstra(start) {
    let dist = Array(N + 1).fill(Infinity);
    let queue = [{ to: start, weight: 0 }];
    dist[start] = 0;

    while (queue.length) {
        let { to, weight } = queue.shift();

        if (!graph[to]) continue; // 연결된 경로가 없으면 스킵

        graph[to].forEach((next) => {
            if (dist[next.to] > dist[to] + next.weight) {
                dist[next.to] = dist[to] + next.weight;
                queue.push({ to: next.to, weight: dist[next.to] });
            }
        });
    }
    return dist;
}

// 1 -> v1 -> v2 -> N 경로와 1 -> v2 -> v1 -> N 경로를 각각 계산
let distFrom1 = dijkstra(1);
let distFromV1 = dijkstra(v1);
let distFromV2 = dijkstra(v2);

let path1 = distFrom1[v1] + distFromV1[v2] + distFromV2[N];  // 1 -> v1 -> v2 -> N 경로
let path2 = distFrom1[v2] + distFromV2[v1] + distFromV1[N];  // 1 -> v2 -> v1 -> N 경로


if (distFrom1[v1] === Infinity || distFromV1[v2] === Infinity || distFromV2[N] === Infinity) {
    path1 = Infinity;
}
if (distFrom1[v2] === Infinity || distFromV2[v1] === Infinity || distFromV1[N] === Infinity) {
    path2 = Infinity;
}

let answer = Math.min(path1, path2);

// 경로가 없는 경우 -1 출력
console.log(answer === Infinity ? -1 : answer);
