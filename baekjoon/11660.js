const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const [N, M] = input[0].split(' ').map(Number);

//숫자 배열 저장 
const matrix = [];
for (let i = 1; i <= N; i++) {
    matrix.push(input[i].split(' ').map(Number));
}

//누적합을 위한 배열 선언 N+1 로 선언해서 좌표랑 인덱스랑 맞춰줄것임 (0,0)-> (1,1)
const prefixSum = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

//누적합 계산 현재위치에서 왼쪽 값과 위의 값을 더하고 대각선 위의 값을 빼주면 누적합 -> 하나의 행 , 열로 생각했을 때 겹치는 부분이 대각선 위의 값임 
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
        prefixSum[i][j] = matrix[i - 1][j - 1] + prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1];
    }
}

let ans =""; // 기존에는 for 문 안에 결과값을 바로 console.log(result) 로 출력해주었는데 이는 시간초과로 한번에 출력할 수 있도록 함 
for (let i = N + 1; i < N + 1 + M; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    ans += String(prefixSum[x2][y2] - prefixSum[x1 - 1][y2] - prefixSum[x2][y1 - 1] + prefixSum[x1 - 1][y1 - 1])+"\n";
    
}
console.log(ans);


/*
설명이 필요할 시 그림판으로 설명해둠 
*/