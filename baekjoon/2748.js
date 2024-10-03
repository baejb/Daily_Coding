const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = Number(input[0]);
let dp = Array(N).fill(0n);
dp[0] = 0n;
dp[1] = 1n; 
for(let i =2; i<=N; i++){
    dp[i] = BigInt(dp[i-1])+BigInt(dp[i-2]);
}
console.log(dp[N].toString());