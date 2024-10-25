const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N ,M, K, X] = input[0].split(" ").map(Number);
let graph = Array.from({length: N+1}, ()=>[]);
let minDist = Array(N+1).fill(Infinity);
for(let i= 1; i < input.length; i++){
    let [A, B] = input[i].split(" ").map(Number);
    graph[A].push({to: B, dist: 1});
}

let queue = [{to : X, dist: 0}];
minDist[X] = 0;
while(queue.length) {
    let {to, dist} = queue.shift();

    graph[to].forEach((next)=>{
        if(minDist[next.to] > minDist[to] + next.dist){
            minDist[next.to] = minDist[to] + next.dist;
            queue.push(next);
        }
    })
}
let answer = [];
minDist.forEach((element,index) => {
    if(element === K) answer.push(index);
});

console.log(answer.length > 0 ?answer.join("\n") : "-1" );