const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
let result = [];
const checkAnswer = (a,b,c) => {
    let sortArr = [a,b,c].sort((a,b) => a-b);
    if(sortArr[0]+ sortArr[1] <= sortArr[2]){
        result.push("Invalid");
        return ;
    } else {
    if(a === b && b === c){
        result.push("Equilateral");
        return ;
    } 
    if ( a !== b && b!==c && c!==a) {
        result.push("Scalene");
        return ;
    } 
    result.push("Isosceles");
    
    } 

}

for(let i =0; i <input.length; i++){
    let [a, b, c] = input[i].trim().split(' ').map(Number);
    if(a === 0 && b === 0 && c === 0){
        break;
    }
    checkAnswer(a , b , c);
}
console.log(result.join('\n'));