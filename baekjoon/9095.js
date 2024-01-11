const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let T = Number(input[0]);
let dp = new Array(11).fill(0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for(let i =1; i<=T ; i++){
    let N = Number(input[i]);
    console.log(answer(N));
}


function answer(num){
    if(num <=3){ 
        return dp[num];
    }
    for(let i = 4 ; i<=num ; i++){
        dp[i] = dp[i-1]+dp[i-2]+dp[i-3];
    }
    return dp[num];
}

//점화식을 세워봤을 때 dp[i] = dp[i-1]+dp[i-2]+dp[i-3] 
//즉 1,2,3 일 때는 값을 직접 선언해주고 4이상일 때 점화식을 적용 할 수 있다. 
/* A(n)은,

- A(n-1), 즉 n-1을 만드는 모든 경우 각각에 대해 그 뒤에 1을 더하는 것

- A(n-2), 즉 n-2를 만드는 모든 경우 각각에 대해 그 뒤에 2를 더하는 것

- A(n-3), 즉 n-3을 만드는 모든 경우 각각에 대해 그 뒤에 3을 더하는 것

의 모든 경우의 수의 합이기 때문 */