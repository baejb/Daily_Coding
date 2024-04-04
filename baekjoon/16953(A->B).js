const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const [A,B]= input[0].split(' ').map(Number);
// 7 : 33  ~ 7: 27
// 2를 곱하거나 1을 오른쪽에 추가하는것 

let answer = -1;
function dfs( A ,cnt){
    if(A === B){
        answer = cnt;
        return ;
    }
    if(A > B) return; 
    dfs(A * 2 , cnt + 1);
    let stringA = String(A);
    stringA = Number(A+'1');
    
    dfs(stringA, cnt + 1)

}
dfs(A,1);
console.log(answer);