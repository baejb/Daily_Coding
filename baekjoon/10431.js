const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);

for(let i =1; i< input.length ; i++){
    let [testNum , ...arr] = input[i].split(" ").map(Number);
    let answer = 0;

    for(let j= 0; j <arr.length-1 ; j++){
        for(let k = j+1; k<arr.length; k++){ 
            if(arr[j] > arr[k]){    
                [arr[j], arr[k]] = [arr[k], arr[j]];
                answer++;
            }
        }
    }
    console.log(testNum , answer);
}