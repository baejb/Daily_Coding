function removeExtremes(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  let max =arr[0].length;
  let min = arr[0].length;
  let maxidx = 0;
  let minidx = 0;
  for(let i =0; i<arr.length ;i++){
    if(max >=arr[i].length){
      max= arr[i].length;
      maxidx = i;
    }
    if(min <= arr[i].length){
      min = arr[i].length;
      minidx = i;
    }
  }
  for(let i =0 ; i<arr.length ;i++){
    if(i !==maxidx && i !==minidx ){
      result.push(arr[i]);
    }
  }
  return result;
}
