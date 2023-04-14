const swap = function (idx1, idx2, arr) {  
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let N = arr.length;
  let swapCount = 0;
  for (let i = 0; i < N - 1; i++) {
    // 매 반복(iteration)마다 i번째로 큰 수가 마지막에서 i번째 위치하게 된다.
    // 이미 정렬된 요소는 고려할 필요가 없으므로, 'j < N - 1 - i'만 비교하면 된다.
    for (let j = 0; j < N - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swapCount++;
        swap(j, j + 1, arr);
      }
    }
    if(swapCount === 0){
        break;
    }
  }

  return arr;
};



