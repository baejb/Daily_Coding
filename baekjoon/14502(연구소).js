const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
let virus = input.map(row => row.split(' ').map(Number));

function makeWalls (){
    let walls = [];
    let virusArea = [];
    // 0인곳만 벽을 세울 수 있음 
    for(let i =0; i < N; i++){
        for(let j =0; j< M; j++){
            if(virus[i][j] === 0){
                walls.push([i,j]);
            }
            else if(virus[i][j] === 2){
                virusArea.push([i,j]);
            }
        }
    }
    
    let maxSafeArea = 0;
    for(let i =0; i<walls.length - 2 ; i++){
        for(let j = i+1;j< walls.length - 1; j++){
            for(let k = j+1; k < walls.length; k++){
                let [x1,y1] = walls[i];
                let [x2,y2] = walls[j]; 
                let [x3,y3] = walls[k];

                // 벽을 세우기 전 상태의 배열을 복사
                let tempVirus = virus.map(row => row.slice());

                // 벽을 세움
                tempVirus[x1][y1] = 1;
                tempVirus[x2][y2] = 1;
                tempVirus[x3][y3] = 1;
        
                // 바이러스 퍼트림
                spreadVirus(tempVirus, virusArea); 

                // 안전 영역 개수 확인
                maxSafeArea = Math.max(maxSafeArea, countSafeArea(tempVirus));
             }
        }
    }
    return maxSafeArea;
}

let dy = [-1,1,0,0];
let dx = [0,0,-1,1];
function spreadVirus(virus, virusArea){
    let visited = Array.from({ length: N }, () => Array(M).fill(false)); 
    let queue = virusArea.slice(); // 바이러스 초기 위치를 큐에 넣음
    while(queue.length){
        let [cx, cy] = queue.shift(); // 큐에서 요소 추출
        for(let i =0; i<4; i++){
            let ty = dy[i] + cx ;
            let tx = dx[i] + cy ;
            if(ty >= 0 && ty < N && tx >= 0 && tx < M && !visited[ty][tx] && virus[ty][tx] === 0){
                visited[ty][tx] = true; 
                virus[ty][tx] = 2;
                queue.push([ty,tx]); 
            }
        } 
    }
}

function countSafeArea(virus){
    let sum = 0;
    for(let i =0; i<N; i++){
        for(let j =0; j<M; j++){
            if(virus[i][j] === 0){
                sum++;
            }
        }
    }
    return sum;
}

console.log(makeWalls());
