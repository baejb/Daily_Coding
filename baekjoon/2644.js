const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]); //전체 사람 수 
const [p1, p2] = input[1].split(' ').map(Number); //촌수 계산해야되는 두 사람 
const m = parseInt(input[2]); // 자식 관계 수 
let edges = [];

for(let i =0;i <m; i++){
    edges.push(input[i+3].split(' ').map(Number));
}

let graph = {};

edges.forEach(([n1 , n2 ])=> {
    if(!graph[n1]){
        graph[n1] = [];
    }
    if(!graph[n2]){
        graph[n2] = [];
    }
    graph[n1].push(n2);
    graph[n2].push(n1);
    
})
let visited = [];

let answer = 0;
const dfs = (start, depth) => {
    // start가 b에 도달하면 depth answer에 저장
    if (start === p2) answer = depth;
  
      // 현재 노드 방문처리 안 되어있다면 방문 처리하고 dfs실행하는데 depth는 1씩 증가
      for (const v of graph[start]) {
        if (!visited[v]) {
          visited[v] = true;
          dfs(v, depth + 1);
        }
      }
  };

dfs(p1,0);
answer ? console.log(answer) : console.log(-1);






