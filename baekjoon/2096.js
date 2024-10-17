const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input[0]);
let dpMax = Array.from({length: N}, ()=> Array(N).fill(0));
let dpMin = Array.from({length: N}, ()=> Array(N).fill(Infinity));

dpMax[0] = input[1].split(" ").map(Number);
dpMin[0] = input[1].split(" ").map(Number);

let arr = [];
for(let i = 1; i< input.length ; i++){
    arr.push(input[i].split(" ").map(Number));
}

for(let i =0; i<N-1;i++){
    for(let j =0; j<3 ; j++){
        if(j === 0) {
            dpMax[i+1][j] = Math.max(dpMax[i][j] , dpMax[i][j+1]) + arr[i+1][j];
            dpMin[i+1][j] = Math.min(dpMin[i][j] , dpMin[i][j+1]) + arr[i+1][j];  
        }
        if(j === 1){
            dpMax[i+1][j] = Math.max(dpMax[i][j-1] , dpMax[i][j], dpMax[i][j+1]) + arr[i+1][j];
            dpMin[i+1][j] = Math.min(dpMin[i][j-1] , dpMin[i][j], dpMin[i][j+1]) + arr[i+1][j];  
        }
        if(j=== 2 ){
            dpMax[i+1][j] = Math.max(dpMax[i][j-1] , dpMax[i][j]) + arr[i+1][j]; 
            dpMin[i+1][j] = Math.min(dpMin[i][j-1] , dpMin[i][j]) + arr[i+1][j]; 
        }
    }
    
}

console.log(Math.max(...dpMax[N-1]), Math.min(...dpMin[N-1]))