const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input[0]);
const M = Number(input[1]);
const X = input[2].split(" ").map(Number);

// 0 ~ 시작 가로등 위치 ,굴다리 길이 끝과 끝 가로등 ,가로등 간 간격/2 
let len1 = X[0] - 0 ;
let len2 = Math.abs( N - X[X.length-1]);
let len3 = 0;
for(let i =1; i< X.length; i++){
    let len = X[i] - X[i-1];
    if(len > len3)  len3 = len;
}

console.log(Math.max(len1, len2, Math.ceil(len3/2)));

