function fibonacci(n,memo) {
    memo = memo || {}
    if (memo[n]) {
        return memo[n]
    }
    if (n <= 1) {
        return n
    }
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
}
