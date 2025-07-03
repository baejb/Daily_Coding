function solution(arr) {
  let nums = arr.filter((_, i) => i % 2 === 0).map(Number);
  let operators = arr.filter((_, i) => i % 2 !== 0);

  let N = nums.length; // 숫자의 길이
  let dp_max = Array.from({ length: N }, () => Array(N).fill(-Infinity));
  let dp_min = Array.from({ length: N }, () => Array(N).fill(Infinity));

  for (let i = 0; i < N; i++) {
    dp_max[i][i] = dp_min[i][i] = nums[i];
  }

  for (let gap = 1; gap < N; gap++) {
    for (let i = 0; i + gap < N; i++) {
      let j = i + gap;

      for (let k = i; k < j; k++) {
        let op = operators[k];

        let a = dp_max[i][k];
        let b = dp_max[k + 1][j];
        let c = dp_min[i][k];
        let d = dp_min[k + 1][j];

        if (op === "+") {
          dp_max[i][j] = Math.max(dp_max[i][j], a + b);
          dp_min[i][j] = Math.min(dp_min[i][j], c + d);
        } else if (op === "-") {
          dp_max[i][j] = Math.max(dp_max[i][j], a - d);
          dp_min[i][j] = Math.min(dp_min[i][j], c - b);
        }
      }
    }
  }

  return dp_max[0][N - 1];
}
