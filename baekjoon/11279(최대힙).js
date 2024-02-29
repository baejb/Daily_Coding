const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let N = Number(input[0]);

class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value){
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while(index > 0){
            let element = this.heap[index];
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.heap[parentIndex];
            if(parent >= element) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    extractMax() {
        const max = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.sinkDown(0);
        }
        return max;
    }

    sinkDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let largest = index;
        const length = this.heap.length;
        if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largest]) {
            largest = leftChildIndex;
        }
        if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largest]) {
            largest = rightChildIndex;
        }
        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.sinkDown(largest);
        }
    }
}
  let answer = [];
  const maxHeap = new MaxHeap; 
  for(let i = 1; i<=N; i++){
      let x =(Number(input[i]));
      if(x === 0) {
        answer. push(maxHeap.extractMax()||0);
      }else {
        maxHeap.insert(x);
      }
  }

  console.log(answer.join('\n'));