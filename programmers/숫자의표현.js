function solution(n) {
  let answer = 0;
  let sum = 1;
  let start = 1;
  let end = 1;

  while (start <= n / 2) {
    if (sum === n) {
      answer++;
      sum -= start;
      start++;
    } else if (sum < n) {
      end++;
      sum += end;
    } else {
      sum -= start;
      start++;
    }
  }
  return answer + 1;
}
