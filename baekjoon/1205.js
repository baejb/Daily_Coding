const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, score, P] = input[0].split(" ").map(Number);
let answer = 0;

if (N > 0) {
    const arr = input[1].split(" ").map(Number); 
    arr.push(score);
    arr.sort((a, b) => b - a);

    const firstRank = arr.indexOf(score) + 1;
    const lastRank = arr.lastIndexOf(score) + 1;

    if (firstRank !== lastRank) {
        if (lastRank <= P) answer = firstRank;
        else answer = -1;
    } else {
        if (lastRank <= P) answer = lastRank;
        else answer = -1;
    }
} else {
    answer = 1;
}

console.log(answer);
