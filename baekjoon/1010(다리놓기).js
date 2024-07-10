const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input[0]);

function bridgeCombinations(n, m) {
    // dp 테이블 초기화
    const dp = Array.from({length: n + 1}, () => Array(m + 1).fill(0));

    // 기본 조건 초기화
    for (let i = 0; i <= m; i++) {
        dp[0][i] = 1; // 아무 다리도 놓지 않는 경우 1가지 방법
    }

    // dp 계산
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= m; j++) {
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j - 1];
        }
    }

    return dp[n][m];
}

for (let i = 1; i <= N; i++) {
    let [n, m] = input[i].split(" ").map(Number);
    console.log(bridgeCombinations(n, m));
}
