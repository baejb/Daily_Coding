const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
// 9: 08
const N = Number(input[0]);
const schedules = input.slice(1).map(line => line.split(' ').map(Number));

const dp = Array(N+1).fill(0);

// 뒤에서부터 탐색
for (let i = N - 1; i >= 0; i--) {
    const [t, p] = schedules[i];
    if (i + t <= N) { // 현재 상담을 선택하는 경우
        dp[i] = Math.max(p + dp[i + t], dp[i + 1]);
    } else { // 현재 상담을 선택할 수 없는 경우
        dp[i] = dp[i + 1];
    }
}

console.log(dp[0]); // 최대 이익 출력
console.log(dp);