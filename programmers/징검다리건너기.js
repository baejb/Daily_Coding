function solution(stones, k) {
  let left = 1;
  let right = 200000000;
  let answer = 0;
  const n = stones.length;

  function checkCross(people) {
    let skip = 0;
    for (let i = 0; i < n; i++) {
      if (stones[i] < people) {
        skip++;
        if (skip >= k) return false;
      } else {
        skip = 0;
      }
    }
    return true;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (checkCross(mid)) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}
