const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\n');
let arr = [];
const n = Number(input[0]);
for(let i =1 ; i<= n ; i++){
    arr.push(input[i].split(' ').map(Number));
}
// 정삼각형크기만큼 새로운 dp 배열을 생성함 , 생성한 dp 배열은 0으로 초기화 
let dp = new Array(n);
for (let i = 0; i < n; i++) {
    dp[i] = new Array(arr[i].length).fill(0);
}

dp[0][0] = arr[0][0]; // 첫번째 맨위에 점은 바로 선언해줌 

for(let i =1; i<n ; i++){ //1부터 시작 
    for(let j =0; j<arr[i].length ; j++){
        if(j === 0){ // 만약 맨 왼쪽 경로는 이전 행에서 바로 위 값이랑 더해줌 
            dp[i][j] = dp[i - 1][j] + arr[i][j];
        }
        else if( j === arr[i].length-1) { // 만약 맨 오른쪽 경로는 이전 행에서 바로 위 값이랑 더해줌 
            dp[i][j] = dp[i-1][j-1] + arr[i][j];
        }
        else{ // 중간 경로는 이전 행에서 큰 값을 찾아서 더해줌 
            dp[i][j] = Math.max(dp[i-1][j] , dp[i-1][j-1]) + arr[i][j];
        }
    }
}
// 찾은 경로 중 마지막 행에서 가장 큰값이 정답이 됨 
console.log(Math.max(...dp[n-1]));
