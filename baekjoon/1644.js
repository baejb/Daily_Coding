const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);

function makePrimeNumber(N) {
  const isPrime = Array(N + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= N; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.map((v, i) => (v ? i : null)).filter((v) => v !== null);
}

const arr = makePrimeNumber(N);

let left = 0;
let sum = 0;
let answer = 0;

for (let right = 0; right < arr.length; right++) {
  sum += arr[right];

  while (sum >= N) {
    if (sum === N) answer++;
    sum -= arr[left++];
  }
}

console.log(answer);
