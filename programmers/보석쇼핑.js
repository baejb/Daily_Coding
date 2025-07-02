function solution(gems) {
  var answer = [];
  let gemsSet = new Set(gems);
  let gemsMap = new Map();
  let left = 0;
  let right = 0;
  let gemKinds = gemsSet.size;

  answer = [1, gems.length];
  gemsMap.set(gems[0], 1);

  while (left <= right && right < gems.length) {
    if (gemsMap.size === gemKinds) {
      if (right - left < answer[1] - answer[0]) {
        answer = [left + 1, right + 1];
      }

      let leftGem = gems[left];
      let count = gemsMap.get(leftGem);
      if (count === 1) gemsMap.delete(leftGem);
      else gemsMap.set(leftGem, count - 1);
      left++;
    } else {
      right++;
      if (right < gems.length) {
        let rightGem = gems[right];
        gemsMap.set(rightGem, (gemsMap.get(rightGem) || 0) + 1);
      }
    }
  }
  console.log(answer);
  return answer;
}
