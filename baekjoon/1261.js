const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [M, N] = input[0].split(" ").map(Number);
let miro = [];
for(let i =1; i< input.length; i++){
    miro.push(input[i].split("").map(Number));
}

let visited = Array.from({length: N}, () => Array(M).fill(false));
let dx = [-1, 1 , 0, 0];
let dy = [0, 0, -1 ,1];

visited[0][0] = true ;
let queue = [[0,0,0]];
let answer = [];
function bfs () {
while(queue.length){
    let [x,y,b] = queue.shift();
  
    if(x === N-1 && y === M-1){
        answer.push(b);
        return;
    }
    for(let i =0; i< 4; i++){
        let tx = x + dx[i];
        let ty = y + dy[i];

        if(tx >=0 && tx < N && ty>=0 && ty < M && !visited[tx][ty]){
            if(miro[tx][ty]=== 0){
                visited[tx][ty] = true;
                queue.unshift([tx,ty, b ]);
              
            }
            else {
                visited[tx][ty] = true;
                queue.push([tx,ty, b+1]);
            }
            }
      
    }
}
}
bfs();
console.log(Math.min(...answer));