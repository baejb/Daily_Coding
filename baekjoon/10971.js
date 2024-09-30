const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
let N = Number(input[0]);
let arr = [];
for(let i=1; i<input.length; i++){
    arr.push(input[i].split(" ").map(Number));
}

let min = Infinity;
function dfs(node , count , visited, sum ){
    if(count === N && arr[node][0] !==0 ){
        min = Math.min(min, sum + arr[node][0]);
        return;
    }
    for(let i =0; i<N; i++){
        if(!visited[i] && arr[node][i]!==0){
            visited[i] = true;
            dfs(i , count+1, visited, sum+arr[node][i]);
            visited[i] = false;
        }
    }
}

let visited = new Array(N).fill(false);
visited[0] = true;
dfs(0,1,visited,0);
console.log(min);
