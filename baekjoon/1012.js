
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

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
