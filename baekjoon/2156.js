const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let n = Number(input[0]);
const wines = input.slice(1).map(Number);
/*
dp[n]을 n-1번째까지의 포도주 잔이 주어졌을 때 마실 수 있는 최대 값 
경우 
*/
const dp = new Array(n).fill(0);

// 예외 처리: 포도주가 1잔일 때
if (n === 1) {
    console.log(wines[0]);
} else if (n === 2) {
    // 예외 처리: 포도주가 2잔일 때
    console.log(wines[0] + wines[1]);
} else {
    dp[0] = wines[0]; //한잔
    dp[1] = wines[0] + wines[1];// 두잔 
    dp[2] = Math.max(wines[0] + wines[2], wines[1] + wines[2], dp[1]);//세잔 중 두잔을 마셨을 때 최대 

    for (let i = 3; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + wines[i], dp[i - 3] + wines[i - 1] + wines[i]);
        //현재 잔을 마시지 않았을 때 (전 두잔을 마신것) vs 현재 잔을 마시고 앞 잔은 안마시고 그 전 값을 더함 vs 현재 잔 + 전 잔  
    }

    console.log(dp[n - 1]);
}
// dp[i - 1]: 현재 잔을 마시지 않는 경우, 이전 잔까지의 최대 양을 그대로 가져옴
// dp[i - 2] + wines[i]: 현재 잔을 마시고, 이전 잔은 마시지 않는 경우, 현재 잔의 양을 더함
// dp[i - 3] + wines[i - 1] + wines[i]: 현재 잔과 이전 잔을 마시고, 그 전 잔은 마시지 않는 경우, 현재 잔과 그 전 잔의 양을 더함