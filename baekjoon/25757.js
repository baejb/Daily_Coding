const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, play] = input[0].split(" ");
const player = new Set();
for(let i =1; i<= N; i++){
    player.add(input[i]);
}

function solution(play){
    let answer = 0;
    if(play === "Y"){
        answer = player.size;
    }
    else if(play === "F"){
        answer = Math.floor(player.size/2);
    }
    else{
        answer = Math.floor(player.size/3);
    }
    return answer;
}
console.log(solution(play));