const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
// 4: 53 ~ 5: 29  6 :6 분 
const N = Number(input[0]);
const area = [];
const area1 = [];
// for(let i = 1; i<=N ; i++){
//     let arr = input[i].split('');
//     area.push(arr);
//     area1.push(arr);
// }

for (let i = 1; i <= N; i++) {
    let arr = input[i].split('');
    area.push([...arr]); // 독립적인 배열로 초기화하기 위해 전개 연산자를 사용하여 복사
    area1.push([...arr]); // 독립적인 배열로 초기화하기 위해 전개 연산자를 사용하여 복사
}
for(let i =0; i< N ; i++){
    for(let j =0; j<N ;j++){
        if(area1[i][j]=== 'R'){
            area1[i][j] = 'G';
        }
    }
}



let visited = Array.from({length: N}, ()=>Array(N).fill(false));
let visited1 = Array.from({length: N}, ()=>Array(N).fill(false));

let answer = 0;
let answer1 = 0;
let dx = [-1,1, 0,0];
let dy = [0,0,-1,1];

function bfs(x,y){
    visited[x][y] = true;
    let queue = [[x,y]]
    let color = area[x][y];
    while(queue.length){
        let [c , r ] = queue.shift();
  
        for(let i = 0; i<4; i++){
            let tx = c + dx[i];
            let ty = r + dy[i];
            if(tx >=0 && tx < N && ty >=0 && ty < N && !visited[tx][ty] && area[tx][ty]===color){
                visited[tx][ty] = true;
                queue.push([tx,ty]);             
            }
        }
    }
    answer++;
    return;
}


function bfs1(x,y){
    visited1[x][y] = true;
    let queue = [[x,y]]
    let color = area1[x][y];
    while(queue.length){
        let [c , r ] = queue.shift();
  
        for(let i = 0; i<4; i++){
            let tx = c + dx[i];
            let ty = r + dy[i];
            if(tx >=0 && tx < N && ty >=0 && ty < N && !visited1[tx][ty] && area1[tx][ty]===color){
                visited1[tx][ty] = true;
                queue.push([tx,ty]);
                
            }
        }
    
    }
 
    answer1++;
    return;
}
for( let i = 0; i< N ;i++){
    for(let j = 0 ; j< N ;j++){
        if(!visited[i][j]){
            bfs(i,j);
        }
        if(!visited1[i][j]){
            bfs1(i,j);
        }
    }
}
console.log(answer, answer1);
