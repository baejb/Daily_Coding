const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const K = Number(input[0]);
const [W, H] = input[1].split(" ").map(Number);
let arr = [];
for(let i =2; i<input.length ;i++){
    arr.push(input[i].split(" ").map(Number));
}
const monkeyX = [-1,1,0,0];
const monkeyY = [0,0,-1,1];
const horseX = [1,2,2,1,-1,-2,-2,-1];
const horseY = [-2,-1,1,2,-2,-1,1,2];
let visited = Array.from({ length: H }, () =>
    Array.from({ length: W }, () => Array(K + 1).fill(false))
);
let answer = 0;
let dist = 0;
function bfs(){
    let queue = [[0,0,0,0]]; // [x, y, count, steps]
    visited[0][0][0] = true;
    while(queue.length){
        let [x,y,count,steps] = queue.shift();
        if(x===H-1 && y === W-1) return steps;

        for(let i=0; i<4; i++){
            let mx = x+monkeyX[i];
            let my = y+monkeyY[i];
            if(mx >= 0 && mx < H && my >= 0 && my < W && !visited[mx][my][count] && arr[mx][my]!==1){
                visited[mx][my][count] = true;
                queue.push([mx,my,count,steps+1])
            }
        }
        if(count < K ) {
            for(let i = 0; i<8; i++){
                let hx = x+horseX[i];
                let hy = y+horseY[i];
                if(hx >= 0 && hx < H && hy >= 0 && hy <W &&!visited[hx][hy][count+1] && arr[hx][hy]!==1){
                    visited[hx][hy][count+1] = true;
                    queue.push([hx,hy,count+1,steps+1]);
                  
                }
            }
    }

    }
    return -1;
}
console.log(bfs());
