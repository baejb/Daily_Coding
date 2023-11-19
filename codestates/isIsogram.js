function isIsogram(str) {
  // TODO: 여기에 코드를 작성합니다.
   if(str.length === 0){
    return true;
  }
  let upperStr = str.toUpperCase();
  let obj = {}
  for(let i= 0; i<str.length; i++){
    if(obj[upperStr[i]]){
      return false;
    }
    obj[upperStr[i]] = true;
  }
  return true;
}

