const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 집의 수 N
const N = parseInt(input[0]);

// 각 집을 빨간색, 초록색, 파란색으로 칠하는 비용
const costs = input.slice(1).map(line => line.split(' ').map(Number));

// DP 배열 초기화
const dp = Array.from({ length: N }, () => Array(3).fill(0));

// 첫 번째 집의 비용은 초기화
dp[0] = costs[0];
// 기본적으로 dp는 이전 상태에 의존해서 현재 상태를 구하는 것이므로 초기상태를 먼저 설정 함  
// DP 배열을 채워나가기
for (let i = 1; i < N; i++) {
    dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]); // 현재 집을 빨간색으로 칠할 때의 최소 비용
    dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]); // 현재 집을 초록색으로 칠할 때의 최소 비용
    dp[i][2] = costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]); // 현재 집을 파란색으로 칠할 때의 최소 비용
 
}

// 마지막 집을 빨간색, 초록색, 파란색으로 칠하는 비용 중 최소값이 정답
const answer = Math.min(...dp[N - 1]);

console.log(answer);
