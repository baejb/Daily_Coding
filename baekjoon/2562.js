const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let max = 0;
let index = 0; 
for(let i =0; i<input.length ;i++){
    if(max < input[i]){
        max = input[i];
        index = i+1;
    }
}
console.log(max);
console.log(index);
