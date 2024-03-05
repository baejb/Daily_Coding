const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let N = Number(input[0]);
let arr = input.slice(1).map(Number);
let answer = 0;
/*최소 힙은 노드 삽입에 O(logn) 시간이, 삭제에 O(1) 시간이 걸리기 때문에 최소 힙을 이용해 알고리즘을 구현하면
 시간 복잡도가 O(nlogn)이 되어 최악의 경우에도 시간 내에 답을 도출할 수 있음 */
class MinHeap{
    constructor(){
        this.heap = [];
    }
    insert(value){
        this.heap.push(value);
        this.bubbleUp();
    }
    size() {
        return this.heap.length;
      }
    bubbleUp() {
        let index = this.heap.length - 1 ;
        while(index >0){
        let element = this.heap[index];
        let parentIndex = Math.floor((index-1)/2);
        let parent = this.heap[parentIndex];
        if(parent <= element) break;
        this.heap[index] = parent;
        this.heap[parentIndex] = element;
        index = parentIndex;
    }
    }
    extractMin() {
        const min = this.heap[0];
        const last = this.heap.pop();
        if(this.heap.length > 0){
            this.heap[0] = last;
            this.sinkDown(0);
        }
    return min;
    }
    
    sinkDown(index){
        const leftChildIndex = 2 * index + 1 ;
        const rightChildIndex = 2 * index + 2 ;
        let smallest = index;
        const length = this.heap.length;
        if(leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]){
            smallest = leftChildIndex
        }
        if(rightChildIndex < length && this.heap[rightChildIndex]< this.heap[smallest]){
            smallest = rightChildIndex;
        } 
        if(smallest !==index){
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest],this.heap[index]];
            this.sinkDown(smallest);
        }
    }

}

const minHeap = new MinHeap;
for(let i = 1; i<=N ; i++){
    let x = (Number(input[i]));
    minHeap.insert(x);
}

while(minHeap.size()> 0 ){
    if(N===1){ //만약 N이 1이면 비교할 횟수가 없기때문에 따로 0으로 처리해줌 
        answer = 0;
        break;
    }
    if(minHeap.size()>=2){ // 비교할 카드수가 2가지 이상이라면 
       
    let sum = minHeap.extractMin() + minHeap.extractMin(); //맨 앞 값을 뽑아서 sum에 더해줌 
    answer += sum; //정답에 더해준 후 
    if(minHeap.size()!==0) //만약 최소힙에 남은 카드가 있을 때 더해준 sum을 최소 힙에 삽입시킴 -
        minHeap.insert(sum);
    
    } else{ // 만약 남은 카드가 1장이라면 정답에 더해주고 끝 
        answer += minHeap.extractMin();
    }
    
}

console.log(answer);