const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let dp = Array(N).fill(1);
let path = Array(N).fill(-1);

for(let i = 1; i< N ;i++){
    for(let j = 0; j< i; j++){
        if(arr[j] < arr[i] && dp[j]+1 > dp[i]){
            dp[i] = dp[j] + 1 ;
            path[i] = j;
            
        }
    }
}
let maxLength = Math.max(...dp);
let lastIndex = dp.indexOf(maxLength);

console.log(maxLength); 
const lis = [];
while (lastIndex !== -1) {
    lis.push(arr[lastIndex]);
    lastIndex = path[lastIndex];
    
}
lis.reverse();
console.log(...lis);