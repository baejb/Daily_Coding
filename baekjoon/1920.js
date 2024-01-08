const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const N = Number(input[0]);
let arr = input[1].split(' ').map(Number);
const M = Number(input[2]);
let findArr = input[3].split(' ').map(Number);
arr.sort((a,b)=>a-b);

let answer = [];
findArr.forEach((x) =>{
  let start = 0;
  let end = arr.length - 1;
  let ans = false;
 
  while(start <= end){

    let mid = Math.floor((start+end)/2);
    if(x < arr[mid]){
      end = mid - 1 ;
    } 
    else if ( x > arr[mid]){
      start = mid + 1 ;
    } 
    else {
      ans = true;
      break;
    }
  }
  answer.push(ans ? '1' : '0' );

})

console.log(answer.join('\n'));