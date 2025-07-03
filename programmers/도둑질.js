function solution(money) {
  var answer = 0;

  function rob(linearMoney) {
    const n = linearMoney.length;
    if (n === 0) return 0;
    if (n === 1) return linearMoney[0];
    let dp = Array(n).fill(0);

    dp[0] = linearMoney[0];
    dp[1] = Math.max(linearMoney[0], linearMoney[1]);

    for (let i = 2; i < n; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + linearMoney[i]);
    }

    return dp[n - 1];
  }

  const n = money.length;
  if (n === 1) return money[0];

  // Case 1: 첫 번째 집을 털고 마지막 집은 못 털기
  const case1 = rob(money.slice(0, n - 1));

  // Case 2: 첫 번째 집은 안 털고 마지막 집 털기 가능
  const case2 = rob(money.slice(1));

  return Math.max(case1, case2);
}
