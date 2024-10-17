const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input[0]); // 도시의 개수 
const M = Number(input[1]);// 버스의 개수 
let distArr = Array(N+1).fill(Infinity);
let graph = Array.from({length: N+1}, () => []);
let queue = [];
for(let i =2; i<input.length-1; i++){
    let [s , e , m] = input[i].split(" ").map(Number);
    graph[s].push({to : e, dist : m})
}
const [start, end ] = input[input.length-1].split(" ").map(Number);
distArr[start] = 0;
queue.push({to: start, dist : 0});

while(queue.length){
    
    let {to, dist} = queue.shift();

    if(dist > distArr[to]) continue;

    graph[to].forEach(next => {
        if(distArr[next.to] > distArr[to] + next.dist){
            distArr[next.to] = distArr[to] + next.dist
            queue.push(next); 
        }
    })
}
console.log(distArr[end]);
