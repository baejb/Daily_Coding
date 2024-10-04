const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = Number(input[0]);
let P = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
for(let i =1; i<input.length ; i++){
    let N = Number(input[i]);
    if(N < 10){
        console.log(P[N]);
    }else {
        for(let i =10 ; i<=N ; i++){
            P[i] = P[i-1] + P[i-5];
        }
        console.log(P[N]);
    }
}


