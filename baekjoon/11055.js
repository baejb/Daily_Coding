const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let dp = new Array(N); // dp 배열은 부분 수열의 최대 길이를 저장할 배열임 


dp[0] = arr[0]; 

for(let i =1 ; i<N ; i++){ // i는 1부터 시작 
    dp[i] = arr[i];
    let sum = 0;
    for(let j = 0 ; j<= i; j++){ // i번째 수 보다 앞에 있는 수들을 비교해야 하므로 j는 0 부터 i번째까지 실행하도록 함 
       if(arr[j] < arr[i]){ //만약 i 번째 수가 j 번째 수보다 클 경우 (증가하는 수열일 경우 )
        dp[i] = Math.max(dp[i], dp[j] + arr[i]);
        
       }
    }
  
}
console.log(Math.max(...dp)); 
