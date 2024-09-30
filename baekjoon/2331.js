const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
let [A, P] = input[0].split(" ").map(Number);
let D = [A];
let answer = 0;
function findAnswer(arr){
    let now = arr[arr.length-1].toString();
    let num = now.split("").map(Number);
    let result = 0;
    for(let i =0; i < num.length ;i++){
        result += Math.pow(num[i], P);
    }

    if(!arr.includes(result)){
        arr.push(result);
        findAnswer(arr);
    }else{
        let index = arr.findIndex(x => x === result);
        let ans = arr.slice(0,index);
        answer = ans.length;
        return;
    }
}
findAnswer(D);
console.log(answer);