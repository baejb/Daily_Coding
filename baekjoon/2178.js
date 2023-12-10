const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

let maps = Array.from({ length: N }, () => Array(M).fill(0));
let visited = Array.from({ length: N }, () => Array(M).fill(false));

for (let i = 1; i <= N; i++) {
    maps[i - 1] = input[i].split('').map(Number);
}

let dy = [-1, 1, 0, 0];
let dx = [0, 0, -1, 1];
let queue = [];
function bfs(y,x,count){
    queue = [[y,x,count]];


    while(queue.length){
        let [ny,nx,cnt] = queue.shift();
        if(ny === N-1 && nx === M-1){
            return cnt;
        }
        for(let i =0; i<4; i++){
            let ty = ny + dy[i];
            let tx = nx + dx[i];
            if(ty >=0 && ty <N && tx >=0 && tx <M && maps[ty][tx]===1 &&!visited[ty][tx]){
                visited[ty][tx] = true;
                queue.push([ty,tx,cnt+1]);
            }
        }
    }

}
console.log(bfs(0,0,1));