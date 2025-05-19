function solution(n, q, ans) {
  var answer = 0;

  function combination(arr, k) {
    const result = [];

    function backtrack(start, path) {
      if (path.length === k) {
        result.push([...path]);
        return;
      }
      for (let i = start; i < arr.length; i++) {
        path.push(arr[i]);
        backtrack(i + 1, path);
        path.pop();
      }
    }
    backtrack(0, []);
    return result;
  }
  function isValid(code, q, ans) {
    for (let i = 0; i < q.length; i++) {
      const count = q[i].filter((num) => code.includes(num)).length;
      if (count !== ans[i]) {
        return false;
      }
    }
    return true;
  }
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  const allArr = combination(arr, 5);

  for (let com of allArr) {
    if (isValid(com, q, ans)) answer++;
  }

  return answer;
}
