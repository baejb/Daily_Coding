const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(" ").map(Number); //국가 수, 등수를 알고싶은 국가 
let answer = 0;
let medal = [];
let find = [];
for(let i = 1; i< input.length ;i++){
    medal.push(input[i].split(" ").map(Number));
    let [num, ...arr] = input[i].split(" ").map(Number);
    if(num === K){
        find.push(...arr);
    }
    
}
medal.sort((a, b) => b[1]-a[1] || b[2]-a[2] || b[3]- a[3]);

for(let i =0; i< medal.length ;i++){
    if(medal[i][1] === find[0] && medal[i][2] === find[1] && medal[i][3] === find[2]){
        answer = i+1;
        break;
    }
}
console.log(answer);