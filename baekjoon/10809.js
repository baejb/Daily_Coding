const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');


let arr = input[0].split('');
let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let answer = [];
for(let i = 0; i<alpha.length; i++){
    answer.push(arr.indexOf(alpha[i]));
}
console.log(...answer);