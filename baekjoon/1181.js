const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = input[0];
let words = [];

for (let i = 1; i <= N; i++) {
  words.push(input[i]);
}

// 중복 제거를 위해 Set 사용
const uniqueWords = [...new Set(words)];

// 정렬
uniqueWords.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  } else {
    return a.localeCompare(b); // 사전 순으로 정렬
  }
});

// 결과 출력
uniqueWords.forEach((x) => {
  console.log(x);
});
