const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let H = input[0];
let M = input[1];



if(H === 0 && M < 45){
    H = 23 ; 
    M = 60 - 45 + M ;
}
else if(M < 45){
    H = H - 1 ; 
    M = 60 - 45 + M ; 
}
else { 
    M = M - 45 ; 
}
console.log(H, M);

