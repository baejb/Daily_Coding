const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const words = input[0];
let space = 0;
for(let i =0 ;i<words.length ; i++){
    if(words[i] === ' '){
        space++;
    }
}
if(words.length === 0){
    console.log(space);
}else{
console.log(space+1);
}