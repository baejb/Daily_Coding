const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);

let answer = new Set();
let visited = Array(N).fill(false);
let result = [];

function dfs(numArr, size) {
    if (size === M) {
        const permutation = numArr.join(" ");
        if (!answer.has(permutation)) {
            answer.add(permutation);
            result.push(permutation);
        }
        return;
    }

    for (let i = 0; i < N; i++) {
        if (!visited[i] ){
        visited[i] = true;
        numArr.push(arr[i]);
        dfs(numArr, size + 1);
        numArr.pop();
        visited[i] = false;
        }
    }
}

dfs([], 0);
console.log(result.join("\n"));
