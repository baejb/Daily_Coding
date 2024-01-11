const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);
 
const DP = new Array(N + 1).fill(0);

for (let i = 2; i <= N; i++) {
    DP[i] = DP[i - 1] + 1; //-1을 해줄 때, 입력값의 가장 작은 수  부터 채워나가므로 먼저 선언해주었음 

    if (i % 2 === 0) {//2로 나누어 질  때 연산횟수를 비교 함  
      DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    }

    if (i % 3 === 0) { //3으로 나누어 질  때 연산횟수를 비교 함  
      DP[i] = Math.min(DP[i], DP[i / 3] + 1);	
    }
}
console.log(DP[N]);