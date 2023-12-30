const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let dp = new Array(N); // dp 배열은 부분 수열의 최대 길이를 저장할 배열임 


dp[0] = 1; // 첫번째는 무조건 item이 하나는 있으므로 길이가 1 이다. (인덱스는 부분수열의 인덱스에서의 최대 부분 수열의 길이를 의미함)

//수열 A의 item을 최대 값으로 가지는 부분 수열의 최대 길이를 배열로 저장한 후 최대 길이를 출력하도록 문제를 품. 
for(let i =1 ; i<N ; i++){ // i는 1부터 시작 
    let max = 0 ; //최댓값은 0으로 설정
    for(let j = 0 ; j<= i; j++){ // i번째 수 보다 앞에 있는 수들을 비교해야 하므로 j는 0 부터 i번째까지 실행하도록 함 
       if(arr[j] > arr[i]){ //만약 i 번째 수가 j 번째 수보다 작을 경우 (감소하는 수열일 경우 )
        max = Math.max(max, dp[j]); // max는 max와 dp[j]를 비교하여 비교하는 것까지의 최대 길이를 저장 
       }
    }
    dp[i] = max + 1; // 현재 인덱스 i 에 해당하는 부분 수열의 최대 길이를 저장 
}
console.log(Math.max(...dp)); // dp 에 저장된 길이 중 최대를 출력함 

