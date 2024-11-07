function solution(n, money) {
    const MOD = 1000000007;
    const dp = Array(n + 1).fill(0); 
    dp[0] = 1;

    money.forEach((coin) => {
        for (let amount = coin; amount <= n; amount++) {
            dp[amount] = (dp[amount] + dp[amount - coin]) % MOD;
        }
    });

    return dp[n];
}
