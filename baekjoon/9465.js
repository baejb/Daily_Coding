const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const T = Number(input[0]);

//테스트 케이스 만큼 반복

for (let i = 1; i <=T; i++) {
    // 각 테스트 케이스를 처리하는 로직 작성
    let n = input[i * 3 - 2];
    let fLine = input[i * 3 - 1].split(' ').map(Number);
    let sLine = input[i * 3]. split(' ').map(Number);

    let dp = [
        Array.from({length : n}, () => 0),
        Array.from({length : n}, () => 0),
        Array.from({length : n}, () => 0),
    ];
    dp[0][0] = fLine[0]; // 첫번째 줄 시작했을 때 
    dp[1][0] = sLine[0]; // 두번째 줄 시작했을 때 
    dp[2][0] = 0; 
    for( let j = 1 ; j< n ; j++){
        dp[0][j] = Math.max(dp[1][j-1] , dp[2][j-1]) + fLine[j];
        dp[1][j] = Math.max(dp[0][j-1] , dp[2][j-1]) + sLine[j];
        dp[2][j] = Math.max(dp[0][j-1] , dp[1][j-1]) ;
    }
    console.log(
        Math.max(dp[0][n-1],dp[1][n-1],dp[2][n-1])
    );


}


/*
50 10 100 20 40
30 50 70 10 60 
dp 설명  - 위의 스티커를 골랐을 때, 아래의 스티커를 골랐을 때, 아무것도 고르지 않았을 때 이렇게 총 3가지로 dp배
50  40 (1,2번 중 큰 값 : 10 + 30 ) 200  190  250

30  100(0,2번 중 큰 값 : 50 + 50)  120  210  260

0   50 (0,1번 중 큰 값 : 50)       100  200  210  


*/