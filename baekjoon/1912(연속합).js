const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let dp = Array(N).fill(0);
dp[0] = arr[0];
for(let i = 1; i < N ; i++ ){
    if(dp[i-1]< arr[i]){
        dp[i] = Math.max(arr[i], dp[i-1]+arr[i] );
    }else {
        dp[i] = dp[i-1] + arr[i];
    }
} 
console.log(Math.max(...dp));