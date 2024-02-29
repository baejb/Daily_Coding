const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let [N ,M] = input[0].split(' ').map(Number);
// Hash Function을 통해 빠른 탐색이 가능 -> O(1)
/* 
해시테이블 - Map을 사용함 
키는 고유값으로 한 개만 존재하고 value 설정은 set() 사용함 ,has는 있는지 없는지 확인 
해쉬 탐색으로 위해 for-of 문을 사용하였고 
keys()을 통해 map1의 키값을 모두 가져와서 순환하여
map2가 key를 가지고 있을 때 answer에 추가해주었음 

*/
let map1 = new Map();
let map2= new Map();
let answer = [];
for(let i = 1; i<=N; i++){
    map1.set(input[i],i); 
}
for(let i= N+1 ; i<input.length; i++){
    map2.set(input[i],i);
}

for(let key of map1.keys()){
    if(map2.has(key)){
        answer.push(key);
    }
   
}

answer.sort();
console.log(answer.length);
answer.forEach((x)=>{
    console.log(x);
})

/*
처음 제출 코드 - 시간초과 

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let [N ,M] = input[0].split(' ').map(Number);
let arr1= [];
let arr2= [];
let answer = [];
for(let i = 1; i<=N; i++){
    arr1.push(input[i]);
}
for(let i= N+1 ; i<input.length; i++){
    arr2.push(input[i]);
}
arr2.forEach((x)=>{
    if(arr1.includes(x)){
        answer.push(x);
    }
})
answer.sort();
console.log(answer.length)
console.log(...answer);
*/