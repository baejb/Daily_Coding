const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number); // 첫 번째 줄의 값을 N, M, V로 분리하여 저장

const edges = [];
for (let i = 1; i <= M; i++) {
  const values = input[i].split(' ').map(Number);
  edges.push(values);
}

// console.log(N, M, V); // N, M, V 출력
// console.log(edges); // 변(Edge) 정보 출력
let graph = {}

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
for (const key in graph) { 
  if (graph.hasOwnProperty(key)) {
    graph[key].sort((a, b) => a - b);
  }
}

let dfsVisited = [];
let answerDfs= [];

function dfs(node ,visited) {

    if(visited[node]){
        return;
    }
    visited[node] = true; 
    answerDfs.push(node);
    if(graph[node]){
    for(let n of graph[node]){
        dfs(n , visited)
    }
}
    return answerDfs.join(" ");
}
let bfsVisited = [];
let answerBfs = [];
function bfs(node , visited) { 
    let queue = [node];
    visited[node] = true;
  
    while (queue.length !== 0) {
      let current = queue.shift();
      for (let neighbor of graph[current] || []) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      }
      answerBfs.push(current);
    }   
    return answerBfs.join(" ");
  }

console.log(dfs(V,dfsVisited));
console.log(bfs(V,bfsVisited));


