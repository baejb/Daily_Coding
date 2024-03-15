const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let prefixSum = [0]; 
let result = [];

// 누적 합 배열 계산
for (let i = 0; i < N; i++) {
    prefixSum.push(prefixSum[i] + arr[i]);
}

// 누적합으로 반복해서 계산을 하지 않게 함 , j 누적합에서 i-1 누적합을 빼주면 됨 
for (let k = 2; k < M + 2; k++) {
    let [i, j] = input[k].split(' ').map(Number);
    result.push(prefixSum[j] - prefixSum[i - 1]);
}

console.log(result.join('\n'));
