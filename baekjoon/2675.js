const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);
let arr = []
let answer = '';
for(let i =0 ;i<T ; i++){
    arr = input[i+1].split(' ');
    console.log(main(Number(arr[0]), arr[1]));
    answer = '';
}

function main(num , str){
    let ans = str.split('');
    let j = num;
    for(let i = 0; i<ans.length ; i++){
        while(j > 0) {
            answer += ans[i];
            j--;
        }
        j = num;
    }
    return answer;
}