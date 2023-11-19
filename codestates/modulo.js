function modulo(num1, num2) {
  // TODO: 여기에 코드를 작성합니다.
  let result = 0;
  let i = 1; 
  if(num1 === 0){
    return 0;
  }
  if(num2 === 0){
    return 'Error: cannot divide by zero'
  }
  while(i * num2 <=num1){
    result = i * num2 ;
    i++;
  }
  return num1-result
}
