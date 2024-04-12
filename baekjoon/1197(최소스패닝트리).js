const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function kruskal(edges, V) {
    edges.sort((a, b) => a[2] - b[2]);
    
    let mstWeight = 0;
    const parent = new Array(V).fill().map((_, index) => index);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    function union(x, y) {
        const rootX = find(x);
        const rootY = find(y);
        parent[rootY] = rootX;
    }

    for (const edge of edges) {
        const [u, v, weight] = edge;
        if (find(u) !== find(v)) {
            union(u, v);
            mstWeight += weight;
        }
    }

    return mstWeight;
}

function solve(input) {
    const [V, E] = input[0].split(' ').map(Number);
    const edges = [];

    for (let i = 1; i <= E; i++) {
        const [A, B, C] = input[i].split(' ').map(Number);
        edges.push([A - 1, B - 1, C]); // 노드 번호를 0부터 시작하도록 조정
    }

    const result = kruskal(edges, V);
    console.log(result);
}


solve(input);
