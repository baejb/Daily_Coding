
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = input[0]; //테스트 케이스가 몇개 인지 
const testCases = input.slice(1); // 첫째줄빼고 나머지를 새로운 배열로 선언 
let dy = [1,-1,0,0]; //상하좌우 좌표 이동을 위함 
let dx = [0,0,1,-1]; 
let M,N,K,visited,maps; // bfs 함수에 사용하기 위해 전역으로 선언함 

for(let t =0; t<T ; t++){
    [M ,N ,K] = testCases[0].split(' ').map(Number); //첫번째줄은 가로 길이 ,세로길이 , 배추의 위치 수 
    
    maps = Array.from({length:N}, ()=>Array(M).fill(0)); //M*N 크기의 0인 배열 선언 
    visited = Array.from({length: N},() => Array(M).fill(false)); // M*N크기의 false 배열 선언 
    
    let cabbage = []; // 배추의 위치를 담을 배열 
    
    for (let i = 0; i < K; i++) {
        const [x, y] = testCases[i+1].split(' ').map(Number); // 테스트케이스 1번째 줄은 M,N,K를 나타내므로 i+1번째 부터 접근함 
       
        maps[y][x] = 1; // 좌표 반대로 저장 -> 이차원 배열을 생각해볼때 가로가 y좌표이고 세로가 x좌표를 의미하기 때문   
        cabbage.push([y, x]); //배추의 위치를 담음 
      }
      
    
    let answer = 0; //지렁이 갯수 

    for(let i =0; i< cabbage.length; i++){ //배추의 수만큼 for문 반복 
        const [y, x] = cabbage[i];
        if(!visited[y][x] && maps[y][x]===1){ //방문하지 않은 배추 위치일 때 
            visited[y][x]= true; // 방문 표시를 한 후 
            bfs(y,x); // bfs 실행 -> 인접한 배추를 확인함 없을 땐 종료된 후 answer -> 지렁이 한마리 추가 
            answer++; // -> bfs 가 종료된 것은 인접한 배추를 다 확인했다는 뜻 
        }
    }
   
    console.log(answer);
    if(t!==T){ // 테스트 케이스가 1개 이상일 때 다음 케이스를 위해 하지만 마지막 케이스일때는 자를필요 없음 
    testCases.splice(0,K+1); // 배열을 잘라서 없애줌 
    }
}

function bfs(y, x){  // 현재 위치로 bfs 실행 
    const queue = [[y,x]]; //현재 위치 큐에 삽입 
    
    while(queue.length){ //큐가 빌때까지 실행 , 즉 인접한 배추가 없을때 까지 실행 
        let [cy,cx] = queue.shift();  // 현재 위치를 꺼냄 
        // console.log(cy,cx);
       
        for(let i =0; i<4; i++){ // 위치 이동 
            let ny = cy + dy[i]; // dy = [1,-1,0,0];
            let nx = cx + dx[i]; // dx = [0,0,1,-1];
            
            if(ny >= 0 && ny < N && nx >=0 && nx < M && !visited[ny][nx]) { //만약 상하좌우로 이동시킨 좌표가 유효한 값이고 방문하지 않았을때 방문처리해줌 
                visited[ny][nx]=true; 
                if(maps[ny][nx]===1){ //배추가 있을 때 
                    queue.push([ny,nx]); //queue 에 push 해줌
                    
                }
            }
        }        
    }
 
}

bfs(0,0);
