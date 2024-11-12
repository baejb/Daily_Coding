const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, K] = input[0].split(" ").map(Number);

let visited = Array(100001).fill(false); // 충분히 큰 범위 설정
let dist = Array(100001).fill(0); // 각 위치까지의 최소 거리를 저장하는 배열
let count = Array(100001).fill(0); // 최단 경로의 개수를 저장하는 배열

function bfs(){
    let queue = [[N, 0]];
    visited[N] = true;
    count[N] = 1;

    while(queue.length){
        let [now, d] = queue.shift();

        if(now === K){
            console.log(dist[K]);
            console.log(count[K]);
            return;
        }

        let nextPositions = [now - 1, now + 1, now * 2];
        for(let next of nextPositions){
            if(next >= 0 && next <= 100000){
                if(!visited[next]){
                    visited[next] = true;
                    dist[next] = dist[now] + 1;
                    count[next] = count[now];
                    queue.push([next, d + 1]);
                } else if(dist[next] === dist[now] + 1){
                    count[next] += count[now];
                }
            }
        }
    }
}

bfs();
