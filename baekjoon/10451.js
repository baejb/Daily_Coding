const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const T = Number(input[0]); // 테스트케이스 
let answer = []; 
for(let i = 1; i < input.length ; i = i+2 ){
    let N = Number(input[i]);
    let visited = new Array(N+1).fill(false);
    let arr = input[i+1].split(" ").map(Number);
    let cycleCnt = 0;
    function dfs(node){
        visited[node] = true;
        let nextNode = arr[node-1]; 
    
        if(!visited[nextNode]){
            dfs(nextNode);
        }
    }
    for(let i = 1; i <=N ; i++){
        if(!visited[i]) {
            cycleCnt++;
            dfs(i);
        }

    }
    answer.push(cycleCnt);
}

console.log(answer.join('\n'));
