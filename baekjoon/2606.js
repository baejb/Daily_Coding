const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const M = parseInt(input[0]);
const N = parseInt(input[1]);
let edges = [];

for(let i =0;i< N; i++){
    edges.push(input[i+2].split(' ').map(Number));
}

let graph = {};

edges.forEach(([n1 , n2 ])=> {
    if(!graph[n1]){
        graph[n1] = [];
    }
    graph[n1].push(n2);
    if(!graph[n2]){
        graph[n2] = [];
    }
    graph[n2].push(n1);
})

let visited = [];
let queue = [];

function bfs(node){

    queue = [node];
    let count = 0;
    visited.push(node);
    while(queue.length){
        let network = queue.shift();
       
        for(let n of graph[network]){
            if(!visited.includes(n)){        
                queue.push(n);
                visited.push(n);
                count++;
        }
        }
    }
    return count;
}

console.log(bfs(1));


