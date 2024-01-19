const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let N = Number(input[0]);

let dp = new Array(N+1).fill(0);

dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
dp[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1];

for (let i = 2; i <= N; i++) {
    dp[i] = new Array(10).fill(0);
    for (let j = 0; j <= 9; j++) {
        if (j === 0) {
            dp[i][j] = dp[i-1][1] % 1000000000;
        } else if (j > 0 && j < 9) {
            dp[i][j] = (dp[i-1][j-1] + dp[i-1][j+1]) % 1000000000;
        } else {
            dp[i][j] = dp[i-1][j-1] % 1000000000;
        }
    }
}

let sum = dp[N].reduce((acc, cur) => (acc + cur) % 1000000000, 0);
console.log(sum % 1000000000);


/* 
dp[i][j]는 i 자리 숫자 중에서 j로 끝나는 계단 수의 개수
j가 0인 경우: 이전 자리 숫자가 1로 끝날 때의 계단 수 개수를 가져옴
j가 1에서 8 사이인 경우: 이전 자리 숫자가 j-1 또는 j+1로 끝날 때의 계단 수 개수를 가져와 더함.
j가 9인 경우: 이전 자리 숫자가 8로 끝날 때의 계단 수 개수를 가져옴.
*/