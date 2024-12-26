const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');


const t = Number(input[0]);


const max = Math.max(...input.slice(1).map(Number));


const dp = Array(max + 1).fill(0);
dp[0] = 1;

[1, 2, 3].forEach((num) => {
    for (let i = num; i <= max; i++) {
        dp[i] += dp[i - num];
    }
});


for (let i = 1; i <= t; i++) {
    const n = Number(input[i]);
    console.log(dp[n]);
}
