/*
2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5
*/
//입력의 첫 줄에는 테스트 케이스의 개수 T가 주어진다. 그 다음 줄부터 각각의 테스트 케이스에 대해 첫째 줄에는 배추를 심은 배추밭의 가로길이 M(1 ≤ M ≤ 50)과 세로길이 N(1 ≤ N ≤ 50)
//, 그리고 배추가 심어져 있는 위치의 개수 K(1 ≤ K ≤ 2500)이 주어진다. 그 다음 K줄에는 배추의 위치 X(0 ≤ X ≤ M-1), Y(0 ≤ Y ≤ N-1)가 주어진다. 두 배추의 위치가 같은 경우는 없다.
/*
input 받기 -> k 가 1 이상일 때 어떻게 input을 받을 지  -> 완
배추가 심어져있는 좌표를 모두 받은 후 가로의 길이가 M, 세로의 길이가 N이고 0으로 채워진 2차원배열 maps에 배추가 심어진 위치를 1로 표시  -> 완료 
좌표 (0,0) 부터 시작해서 상하좌우로 이동 . -> 이때 - 값이면 안됨 또한 갔던곳은 방문할 필요가 없음  , -> visited 배열 선언
bfs 를 위한 queue를 선언 queue 에는 좌표랑 배추 갯수 -> 만약 배추 갯수를 다찾았으면 더 이상 bfs 를 돌 필요가 없으므로 
방문한 곳은 visitied true 처리 주변 연결된 곳 즉 maps에서 값이 1인 곳을 queue에 push 해줌 
연결된 노드들도 탐색해서 1인값을 push 해줌 만약에 queue가 다 비었다 ? 그 말은 연결된 노드가 없다는 뜻 -> 이때 answer ++ 해주고 다음 좌표에서 bfs 실행    

*/
const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\n');

const T = input[0]; // 첫 번째 줄의 값을 N, M, V로 분리하여 저장 
const testCases = input.slice(1);
let dy = [1,-1,0,0]; 
let dx = [0,0,1,-1]; 
let M,N,K,visited,maps; 
// let answer =0;
for(let t =0; t<T ; t++){
    [M ,N ,K] = testCases[0].split(' ').map(Number);
    
    maps = Array.from({length:N}, ()=>Array(M).fill(0));
    visited = Array.from({length: N},() => Array(M).fill(false));
    
    let cabbage = [];
    
    for (let i = 0; i < K; i++) {
        const [x, y] = testCases[i+1].split(' ').map(Number);
        maps[y][x] = 1;
        cabbage.push([y, x]);
      }
      
    
    let answer = 0;

    for(let i =0; i< cabbage.length; i++){
        const [y, x] = cabbage[i];
        if(!visited[y][x] && maps[y][x]===1){
            visited[y][x]= true;
            bfs(y,x);
            answer++;
        }
    }
   
    console.log(answer);
    if(t!==T){
    testCases.splice(0,K+1);
    }
}

function bfs(y, x){ 
    const queue = [[y,x]]; //현재 위치 큐에 삽입 
    
    while(queue.length){
        let [cy,cx] = queue.shift(); 
        // console.log(cy,cx);
       
        for(let i =0; i<4; i++){ // 위치 이동 
            let ny = cy + dy[i];
            let nx = cx + dx[i];
            
            if(ny >= 0 && ny < N && nx >=0 && nx < M && !visited[ny][nx]) {
                visited[ny][nx]=true; //방문처리해주고 
                if(maps[ny][nx]===1){ //배추가 있을 때 
                    queue.push([ny,nx]); //queue 에 push 해줌
                    
                }
            }
        }        
    }
    // answer++;
    // return answer;
}

bfs(0,0);
