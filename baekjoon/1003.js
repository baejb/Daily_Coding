const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let T = Number(input[0]);

let dp = Array.from({length : T} , () => Array(2).fill(0));
dp[0]=[1,0];
dp[1]=[0,1];

for(let i =1; i<=T ; i++){
    let N = Number(input[i]);
    console.log(fibonacci(N));
}


function fibonacci(num){
    for(let i = 2; i<=num; i++){
        dp[i] = [dp[i-1][0]+dp[i-2][0],dp[i-1][1]+dp[i-2][1]]; //기존 피보나치 수열에서는 리턴값을 저장해준 것처럼 문제에서 요구하는 0의 갯수와 1의 갯수를 더해주면 됨 
    }
    return dp[num].join(" ");
}
