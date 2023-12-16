const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [F, S, G, U, D] = input[0].split(' ').map(Number); 

const queue = [[S, 0]];
const visited = Array(100001).fill(false);
function bfs( x , depth ){
    while (queue.length) {
        const [cur, depth] = queue.shift();
      
        if (visited[cur]) {
          continue;
        }
      
        visited[cur] = true;
      
        if (cur === G) {
          return depth;
        }
      
        for (let next of [cur + U, cur - D]) {
          if (!visited[next] && next > 0 && next <= F) {
            queue.push([next, depth + 1]);
          }
        }
    }
    

}
  
let answer = bfs(S,0);

answer !== undefined ? console.log(answer) : console.log('use the stairs');







