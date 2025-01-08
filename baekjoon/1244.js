const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const M = Number(input[2]);
let member = [];
for (let i = 3; i < M + 3; i++) {
    member.push(input[i].split(" ").map(Number));
}

while (member.length) {
    let [sex, number] = member.shift();
    if (sex === 1) {
        // 남자일 경우
        for (let i = number; i <= N; i += number) {
            arr[i - 1] = arr[i - 1] === 0 ? 1 : 0;
        }
    } else {
        let left = number - 1;
        let right = number - 1;

        arr[number - 1] = arr[number - 1] === 0 ? 1 : 0;

        while (left > 0 && right < N - 1 && arr[left - 1] === arr[right + 1]) {
            left--;
            right++;
            arr[left] = arr[left] === 0 ? 1 : 0;
            arr[right] = arr[right] === 0 ? 1 : 0;
        }
    }
}
for (let i = 0; i < arr.length; i += 20) {
    console.log(arr.slice(i, i + 20).join(" "));
}