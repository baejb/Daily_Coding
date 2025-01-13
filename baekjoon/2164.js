const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim();
const N = Number(input);

let queue = Array.from({ length: N }, (_, i) => i + 1);
let front = 0;

while (queue.length - front > 1) {
    front++; 
    queue.push(queue[front]); // 다음 카드를 뒤로 보냄
    front++; 
    console.log(queue);
    console.log(front);
}

console.log(queue[front]);
