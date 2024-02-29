const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let N = Number(input[0]);

class MinHeap {
    constructor() {
      // 힙을 저장할 배열
      this.heap = [];
    }
  
    insert(value){
        this.heap.push(value);
        this.bubbleUp();
    }
    // 힙의 크기를 반환하는 메서드
    size() {
      return this.heap.length;
    }
  
    /* 삽입된 요소를 힙의 올바른 위치로 옮기기 위한 함수  */
    bubbleUp() {
        let index = this.heap.length - 1;
        while(index > 0){
            let element = this.heap[index];
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.heap[parentIndex];
            if(parent <= element) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }
    /*최소 힙에서 가장 작은 값을 추출하는 메서드 
    힙에서 최솟값은 항상 루트 노드에 위치하므로, 우선 루트 노드를 추출 한 후 힙의 마지막 노드를 루트 노드로 옮긴 뒤,
    힙의 성질을 유지하기 위해 sinkDown 연산을 수행 , 
    추출한 최솟값을 반환. */
    extractMin() {
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.sinkDown(0);
        }
        return min;
    }
    /*주어진 인덱스의 노드를 기준으로 해당 노드와 자식 노드들을 비교하여 가장 작은 값을 가진 자식 노드와 위치를 바꿈.
     이때, 자식 노드 중에서 더 작은 값을 가진 노드와 위치를 바꾸어야 하므로 최소 힙의 특성을 유지할 수 있음
     그리고 해당 자식 노드로 이동하여 다시 sinkDown을 호출함. 이를 반복하여 최소 힙의 성질을 유지함 */
    sinkDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallest = index;
        const length = this.heap.length;
        if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
            smallest = leftChildIndex;
        }
        if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
            smallest = rightChildIndex;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.sinkDown(smallest);
        }
    }

    
  }
  let answer = [];
  const minHeap = new MinHeap; 
  for(let i = 1; i<=N; i++){
      let x =(Number(input[i]));
      if(x === 0) {
        answer. push(minHeap.extractMin()||0);
        //   console.log(minHeap.extractMin()||0); 입력이 많아져 시간초과 남 -> 배열로 만들어서 한꺼번에 출력하기
      }else {
          minHeap.insert(x);
      }
  }

  console.log(answer.join('\n'));