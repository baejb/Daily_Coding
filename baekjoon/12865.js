const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//첫 줄에 물품의 수 N(1 ≤ N ≤ 100)과 준서가 버틸 수 있는 무게 K
const [N, K] = input[0].split(' ').map(Number);
 
const packs = input.slice(1).map(line => line.split(' ').map(Number));

    packs.unshift(undefined);

    const maxVSum = [];
    for (let i = 0; i <= N; i++) {
      maxVSum.push(Array(K + 1).fill(0));
    }

    for (let n = 1; n <= N; n++) {
      const [weight, value] = packs[n];
      for (let k = 0; k <= K; k++) {
        if (k < weight) {
          maxVSum[n][k] = maxVSum[n - 1][k];
        } else {
          maxVSum[n][k] = Math.max(
            maxVSum[n - 1][k], //n번 물건 안 담는 경우
            maxVSum[n - 1][k - weight] + value //n번 물건 담는 경우
          );
        }
      }
    }

    console.log(maxVSum[N][K]);


