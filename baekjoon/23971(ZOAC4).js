const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [H, W, N, M] = input[0].split(" ").map(Number);

function maxPeople(H, W, N, M) {
    const rows = Math.ceil(H / (N + 1));
    const cols = Math.ceil(W / (M + 1));
    return rows * cols;
}

console.log(maxPeople(H,W,N,M));

