const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
// 10 30
// 저장될 때부터 모든 토마토가 익어있는 상태이면 0을 출력해야 하고, 토마토가 모두 익지는 못하는 상황이면 -1을 출력해야 한다.
// 안익은토마토 0 / 익은 토마토 1 / 토마토 없을 때 -1 

const [N ,M] = input[0].split(' ').map(Number);
let tomato = [];
let ripeTomatoes = []; //익은 토마토 좌표 저장
let dx = [-1, 1 ,0, 0];
let dy = [0,0, -1, 1];
for(let i =1; i<=M ; i++){
    let row = input[i].split(' ').map(Number);
    tomato.push(row);
}
//익은 토마토의 좌표 저장 
for(let i =0; i< M ; i++){
    for(let j =0; j<N; j++){
        if(tomato[i][j] === 1){
            ripeTomatoes.push([i,j,0]);
        }
    }
}
function bfs (){
    let visited = Array.from({length : M}, ()=>Array(N).fill(false));
    let queue = ripeTomatoes.slice();
    let days = 0 ;
    let front = 0;
    let rear = ripeTomatoes.length - 1;
    while(front <= rear){
        let [ x , y , day ] = queue[front++];
    
        visited[x][y] = true;
        for(let i =0; i<4; i++){
            let tx = x + dx[i];
            let ty = y + dy[i];

            if(tx >=0 && tx < M && ty >=0 && ty < N && !visited[tx][ty] && tomato[tx][ty] === 0){
                visited[tx][ty] = true;
                queue.push([tx,ty , day + 1]);
                tomato[tx][ty] = 1;
                days = day + 1 ;
                rear++;
            }
       
        }
     
    }   
    answer = days ;
    return answer;
}
bfs();

function checkTomato(){
    for(let i =0; i< M ; i++){
        for(let j =0; j<N; j++){
          if(tomato[i][j] === 0){
             answer = -1;
             break;
        } 
    }
    }
    return answer;
}

console.log(checkTomato());
