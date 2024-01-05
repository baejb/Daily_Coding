const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[0];
answer = ''; 
for(let i =1 ; i<= N; i++){
    let j  = i ;
    while(j > 0){
        answer +='*';
        j--;
    }
    console.log(answer);
    answer = '';
}
