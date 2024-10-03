const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = Number(input[0]);
//2 * N 세로는 2 , 가로는  N ;
// 1*2, 2*1 ,2*2 
let dp = Array(N+1).fill(0);
dp[1] = 1;
dp[2] = 3;
for(let i =3; i<=N; i++){
    dp[i] = (dp[i-1]+ 2*dp[i-2]) % 10007;
}
console.log(dp[N]);