const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = Number(input[0]);
let schedules = input.slice(1).map(e => e.split(" ").map(Number));
let dp = Array(N+1).fill(0);

for(let i =0; i<N ; i++){
    let [t, p ] = schedules[i];
    let nextday = i + t;
    
    dp[i] = Math.max(dp[i], (i > 0 ? dp[i - 1] : 0)); 

    if(nextday <= N){
        dp[nextday] = Math.max(dp[i]+p , dp[nextday]);
    }
}
console.log(Math.max(...dp));