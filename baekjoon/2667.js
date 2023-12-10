const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let maps = Array.from({ length: N }, () => Array(N).fill(0));
let visited = Array.from({ length: N }, () => Array(N).fill(false));

for (let i = 1; i <= N; i++) {
    maps[i - 1] = input[i].split('').map(Number);
}

let dy = [-1, 1, 0, 0];
let dx = [0, 0, -1, 1];
let queue = [];
let arr = [];
let answer = 0;
for(let i =0; i< maps.length; i++){ 
    for(let j =0 ; j<maps.length; j++){
    if(!visited[i][j] && maps[i][j]===1){ 
        visited[i][j]= true; 
        arr.push(bfs(i,j));  
        answer++; 
    }
}
}
function bfs(y,x){
    queue = [[y,x,1]];

    let count = 1;

    while(queue.length){
        let [ny,nx,cnt] = queue.shift();
       
        for(let i =0; i<4; i++){
            let ty = ny + dy[i];
            let tx = nx + dx[i];
            if(ty >=0 && ty <N && tx >=0 && tx <N&& maps[ty][tx]===1 &&!visited[ty][tx]){
                visited[ty][tx] = true;
                queue.push([ty,tx,cnt+1]);
                count ++;
            }
        }
     
      
    }
    
    
    return count;
}
arr.sort((a,b)=> a-b);
console.log(answer);
arr.map((x)=>{
    console.log(x);
})