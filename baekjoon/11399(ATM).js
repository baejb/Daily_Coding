const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);
// 걸리는 시간이 작은 순으로 정렬 
arr.sort((a,b)=> a-b);

let sum = 0;
let answer = [];
arr.forEach((x)=>{
    sum+= x ;
    answer.push(sum);
})
// 앞 시간과 더한 시간을 저장한 배열 answer의 원소 값을 모두 저장한 값이 정답 
console.log(answer.reduce((acc, cur)=> acc+cur));
