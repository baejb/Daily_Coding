const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const str1 = input[0].split('');
const str2 = input[1].split('');

// DP 배열 초기화
// 6*6 배열 선언 왜 길이보다 1씩 증가했냐면 그 전의 상태를 기반으로 돌아가게 하기 위해 인덱스 0부터 시작하면 그 전은 -1 이니까 1부터 시작하려고 1씩 증가해서 선언해줌 
let dp = new Array(str1.length + 1).fill(0).map(() => new Array(str2.length + 1).fill(0));

// LCS 계산
for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
        if (str1[i - 1] === str2[j - 1]) { // 현재 위치의 문자가 같으면 이전 위치의 LCS 길이에서 1을 더함
            dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {  // 현재 위치의 문자가 다르면 왼쪽 또는 위쪽에서 더 큰 LCS 길이를 가져옴
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
}

console.log(dp[str1.length][str2.length]);
