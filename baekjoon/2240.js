const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/* 첫째 줄에 두 정수 T, W가 주어진다. 
다음 T개의 줄에는 각 순간에 자두가 떨어지는 나무의 번호가 1 또는 2로 주어진다.
첫째 줄에 자두가 받을 수 있는 자두의 최대 개수를 출력한다
*/
const [T, W] = input[0].split(" ").map(Number);
const plums = input.slice(1).map(Number);
// DP 배열 생성: [시간][이동 횟수][현재 위치]
const dp = Array.from(Array(T + 1), () => Array.from(Array(W + 1), () => Array(3).fill(0)));

if(plums[0] === 1){
    dp[1][0][1] = 1 ;
}else{
    dp[1][1][2] = 1;
}
for(let t = 2; t<= T; t++){
    for(let w =0; w<= W ; w++){
        dp[t][w][1] = dp[t-1][w][1] + (plums[t-1] === 1 ? 1 : 0);
        if(w > 0) {
            dp[t][w][1] = Math.max(dp[t][w][1] , dp[t][w-1][2] +(plums[t-1] === 1? 1: 0));
        }
        dp[t][w][2] = dp[t - 1][w][2] + (plums[t - 1] === 2 ? 1 : 0);
        if (w > 0) {
            dp[t][w][2] = Math.max(dp[t][w][2], dp[t - 1][w - 1][1] + (plums[t - 1] === 2 ? 1 : 0));
        }
    }
}
let maxPlums = 0;
for (let w = 0; w <= W; w++) {
    maxPlums = Math.max(maxPlums, dp[T][w][1], dp[T][w][2]);
}
console.log(maxPlums);