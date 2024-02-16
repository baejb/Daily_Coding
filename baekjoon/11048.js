const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input[0].split(' ');
let arr = [];
for (let i = 1; i <= N; i++) {
    arr[i - 1] = input[i].split(' ').map(Number);
}

const dp = Array.from({ length: M + 1 }, () => 0); // // 최대값을 저장할 배열 dp 초기화 ,1차원 배열로 생성 

for (let i = 1; i <= N; i++) {
    const nextRow = Array.from({ length: M + 1 }, () => 0); // 다음 행을 나타내는 배열 초기화 
    for (let j = 1; j <= M; j++) {
        // 현재 위치까지의 최대값은 이전 행의 같은 열, 이전 열, 이전 행의 이전 열 중에서 가장 큰 값에 현재 위치의 값(arr[i-1][j-1])을 더한 값
        // dp[j]: 현재 위치에서의 이전 행의 같은 열 값
        // dp[j - 1]: 현재 위치에서의 이전 열의 값
        // nextRow[j - 1]: 현재 위치에서의 이전 행의 이전 열 값
        nextRow[j] = arr[i - 1][j - 1] + Math.max(dp[j], dp[j - 1], nextRow[j - 1]);
    }
    dp = nextRow.slice(); // 다음 행으로 업데이트
}
// nextRow 배열이 현재 행의 최대값을 담게 됩니다. 이제 이 값을 dp 배열에 복사하여 다음 행으로 업데이트합니다. 이렇게 하면 이전 행까지의 최대값을 모두 저장할 수 있게 됩니다.

// 이러한 과정을 모든 행에 대해 반복하면 dp[M]에는 최종적으로 마지막 행까지 이동했을 때 얻을 수 있는 최대 사탕 개수가 저장됨
console.log(dp[M]);

// 메모리 초과 / 불필요한 2차원 배열 생성해서 그런 것 같음 
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');

// const [N, M] = input[0].split(' ');
// let arr = [];
// for(let i = 1; i<=N ; i++){
//     arr[i-1] = input[i].split(' ').map(Number);
// }

// const dp = Array.from({ length: N + 1 }, () => Array.from({ length: M + 1}).fill(0));

// for(let i = 1; i<= N; i++){
//     for(let j = 1; j <= M ; j++){
//         let comp = [dp[i-1][j], dp[i][j-1], dp[i-1][j-1]];
//         if (i === 1 && j === 1) {
//             dp[i][j] = arr[i-1][j-1];
//         } else {
//             dp[i][j] = arr[i-1][j-1] + Math.max(...comp);
//         }
       
//     }
// }

// console.log(dp[N][M]);
