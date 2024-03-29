const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let n = Number(input[0]);
//5 50 

let answer = 0;
if( n ===1 || n===2 || n===4 || n ===7){
   answer = -1;
} else{
    while(n > 0){
        if( n < 3 ){
            answer = -1 ;
        }
        if( (n % 5) % 3 === 0  ){
            n -= 5;
            answer++; 
        } else {
            n-=3;
            answer ++;
        }
    }
 }


console.log(answer);