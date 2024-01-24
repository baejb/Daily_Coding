const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);

function answer(N){
    const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));
   
    // dp[i][j]는 길이가 i이면서 끝자리가 j로 끝나는 오르막 수의 개수
    dp[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    for (let i = 2; i <= N; i++) {
        for (let j = 0; j < 10; j++) {
            dp[i][j] = (j > 0 ? dp[i][j - 1] : 0) + dp[i - 1][j] % 10007;
        }
    }
    
    let result = (dp[N].reduce((acc, cur) => acc + cur, 0) % 10007);
  
    return result;
}
console.log(answer(N));

/*
dp[i][j] 2차원 배열로 선언해주었고  i는 자릿수를 j 는 끝 수를 의미함 ! 
즉 길이가 i인 오르막 수를 만드려면 길이가 i-1 인 오르막 수에서 끝자리가 j를 추가하는 것과 같음 
따라서 현재 자릿수의 끝자리가 j 인경우 + 이전 자릿수의 끝자리가 j 인 경우의 합임 
*/