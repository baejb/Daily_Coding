const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = BigInt(input[0]);


let dp = Array(N).fill(0);
dp[1] = 1;
dp[2] = 1; 

for(let i= 3; i<=N ; i++){
    dp[i] = dp[i-1]+dp[i-2];
}
console.log(dp[N]);
