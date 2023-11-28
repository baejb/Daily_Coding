// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
/* ex)
3
110
78
158
/dev/stdin
*/
const fs = require('fs');
const [n, ...input] = fs.readFileSync('example.txt').toString().trim().split('\n');

let last = input[n-1];
let ans = 1;
for(let i = 0; i<input.length; i++){
    if(last < input[i]){
        ans++;
    }
}
console.log(ans);

