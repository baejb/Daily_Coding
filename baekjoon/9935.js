const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const str = input[0];
const bomb = input[1];

let answer = [];

for (let i = 0; i < str.length; i++) {
    answer.push(str[i]);

    if (answer.slice(-bomb.length).join('') === bomb) {
        answer.splice(-bomb.length);
    }
}

console.log(answer.length ? answer.join('') : "FRULA");
