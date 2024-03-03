const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let N = Number(input[0]);
let i = N-1;
let arr = input.slice(1).map(Number);
let answer = 0;
// 연속된 세 계단을 밟으면 안됨 
// dp 는 계단에서 밟았을 때 최댓값 즉 인덱스는 계단 수가 됨  
let dp = Array.from({length : N}, ()=>0);
dp[1] = arr[0]; //계단이 1개일땐 무조건 1개를 밟는게 최대  
dp[2] = arr[0]+arr[1]; // 계단이 2개일 땐 무조건 2개를 밟는게 최대 
dp[3] = arr[2] + Math.max(arr[0],arr[1]); 
// 계단이 3개일 땐 연속 3개를 밟을 수 없고 마지막 계단은 무조건 밟아야하므로 
// 마지막 계단 + 첫번째 ,두번째 계단 중 큰 값 

// 계단 수가 4개 이상일 때부터 가정 
for(let i = 4 ; i<=arr.length; i++){
    // 경우 1. 마지막 계단을 선택하고 앞 계단 선택 연속 3번은 안되니 무조건 앞앞앞계단 선택 
    // 경우 2. 마지막 계단을 선택하고 앞앞계단 선택 
    //경우 1과 2 중 큰 값을 선택 , 앞앞 계단과 앞앞앞계단은 이미 계산되어있을테니 dp 값으로 저장 
    dp[i] = Math.max(arr[i-2]+dp[i-3] + arr[i-1], dp[i-2]+ arr[i-1])
}
console.log(dp[N]);

