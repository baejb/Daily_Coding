const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let [N, K] = input[0].split(' ').map(Number);
let coinArr = [];
let count = 0;

for(let i = 1; i<= N; i++){
    // if(input[i] < K) //K 보다 작을 때만 저장  -> 이 부분을 추가하면 틀린다 왜일까 ?
    coinArr.push(Number(input[i])); 
}

for(let i = coinArr.length - 1 ; i >= 0 ; i--){ //끝에서 부터 검사 
       count += Math.floor(K / coinArr[i]); // / 를 통해 소숫점 부분은 제외해줌 
       K %= coinArr[i]; // 나머지는 다음 동전 수를 세기 위해 K 에 대입 
       if(K === 0){
        break;
       }
      

}

console.log(count);