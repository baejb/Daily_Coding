const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
let N = Number(input[0]);

let dp = Array(N + 1).fill(0);  // 최소 연산 횟수를 저장할 배열
let path = Array(N + 1).fill(0);  // 경로 추적을 위한 배열

// 최소 연산 횟수 계산 및 경로 추적 정보 저장
for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + 1;
    path[i] = i - 1;  // 1을 뺀 경우

    if (i % 3 === 0 && dp[i] > dp[i / 3] + 1) {
        dp[i] = dp[i / 3] + 1;
        path[i] = i / 3;  // 3으로 나눈 경우
    }
    if (i % 2 === 0 && dp[i] > dp[i / 2] + 1) {
        dp[i] = dp[i / 2] + 1;
        path[i] = i / 2;  // 2로 나눈 경우
    }
}

console.log(dp[N]);  // 최소 연산 횟수 출력

// 경로 출력 (N에서 시작해서 1로 가는 과정)
let result = [];
while (N > 0) {
    result.push(N);
    N = path[N];
}

console.log(result.join(' '));
