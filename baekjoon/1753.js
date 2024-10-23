const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [V, E] = input[0].split(" ").map(Number);
const start = Number(input[1]);

let graph = {}
for(let i =2; i< input.length; i++){
    let [ u, v, w] = input[i].split(" ").map(Number);
    if(!graph[u]) graph[u] = [];
    let found = false;
    for (let edge of graph[u]) {
        if (edge.to === v) {
            edge.dist = Math.min(edge.dist, w);
            found = true;
            break;
        }
    }

    if (!found) {
        graph[u].push({to: v, dist: w});
    }
}
class MinHeap {
    constructor() {
        this.heap = [null];
    }

    insert(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = Math.floor(curIdx / 2);
        while (curIdx > 1 && this.heap[parIdx].dist > this.heap[curIdx].dist) {
            [this.heap[parIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parIdx]];
            curIdx = parIdx;
            parIdx = Math.floor(curIdx / 2);
        }
    }

    delete() {
        if (this.heap.length <= 2) return this.heap.pop();
        const min = this.heap[1];
        this.heap[1] = this.heap.pop();
        this.heapify(1);
        return min;
    }

    heapify(idx) {
        let left = idx * 2;
        let right = left + 1;
        let smallest = idx;

        if (left < this.heap.length && this.heap[smallest].dist > this.heap[left].dist) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[smallest].dist > this.heap[right].dist) {
            smallest = right;
        }
        if (smallest !== idx) {
            [this.heap[smallest], this.heap[idx]] = [this.heap[idx], this.heap[smallest]];
            this.heapify(smallest);
        }
    }

    size() {
        return this.heap.length - 1;
    }
}

function dijkstra(start) {
    let distArr = Array(V + 1).fill(Infinity);
    distArr[start] = 0;

    let minHeap = new MinHeap();
    minHeap.insert({ to: start, dist: 0 });

    while (minHeap.size()) {
        let { to, dist } = minHeap.delete();

        if (dist > distArr[to]) continue;
        if (!graph[to]) continue;

        graph[to].forEach((next) => {
            if (distArr[next.to] > distArr[to] + next.dist) {
                distArr[next.to] = distArr[to] + next.dist;
                minHeap.insert({ to: next.to, dist: distArr[next.to] });
            }
        });
    }

    return distArr;
}

let answer = dijkstra(start);
let ansArr = [];
for (let i = 1; i <= V; i++) {
    ansArr.push(answer[i] !== Infinity ? answer[i] : "INF");
}
console.log(ansArr.join("\n"));
