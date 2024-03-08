const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
let N = Number(input[0]);
let arr = input.slice(1);
let graph = {}
let answer = [];
let parent = []; // 각 노드의 부모 노드를 저장할 배열
let tree = [];
arr.forEach((element) => {
    tree.push(element.split(' ').map(Number));
});
tree.sort((a,b)=>{
    a[0]-b[0]
})

tree.forEach((x)=>{
    let [n1, n2] = x;
    if(!graph[n1]){
        graph[n1] = [];
    }
    if(!graph[n2]){
        graph[n2] = [];
    }
    graph[n1].push(n2);
    graph[n2].push(n1);
})

console.log(graph);
// BFS를 활용하여 각 노드의 부모 노드를 찾는 함수
function findParent() {
    const visited = new Array(N + 1).fill(false); // 방문 여부를 저장하는 배열
    const queue = []; // BFS를 위한 큐
    queue.push([1, -1]); // 루트 노드와 부모 노드를 큐에 추가
    visited[1] = true; // 루트 노드를 방문했음을 표시

    while (queue.length > 0) {
        const [node, parentNode] = queue.shift(); // 큐에서 노드와 부모 노드를 추출
        parent[node] = parentNode; // 현재 노드의 부모 노드를 설정

        // 현재 노드의 자식 노드를 방문
        for (let nextNode of graph[node]) {
            if (!visited[nextNode]) { // 방문하지 않은 노드라면
                queue.push([nextNode, node]); // 큐에 추가
                visited[nextNode] = true; // 방문 여부를 표시
            }
        }
    }
}

// 각 노드의 부모 노드를 찾는 함수 호출
findParent();

// 결과 출력
for(let i = 2; i <= N; i++) {
   answer += parent[i] +'\n';
}
//console.log 를 한번만 해줌으로써 시간 초과를 해결 
console.log(answer);