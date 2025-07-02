function solution(m, n, puddles) {
  var answer = 0;
  const mod = 1e9 + 7;
  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  let puddlesMap = Array.from({ length: n + 1 }, () =>
    Array(m + 1).fill(false)
  );
  for (let [x, y] of puddles) {
    puddlesMap[y][x] = true;
  }
  dp[1][1] = 1;

  for (let y = 1; y <= n; y++) {
    for (let x = 1; x <= m; x++) {
      if (puddlesMap[y][x]) {
        dp[y][x] = 0;
        continue;
      }
      if (y > 1) dp[y][x] += dp[y - 1][x] % mod;
      if (x > 1) dp[y][x] += dp[y][x - 1] % mod;
      dp[y][m] %= mod;
    }
  }
  answer = dp[n][m];

  return answer;
}
