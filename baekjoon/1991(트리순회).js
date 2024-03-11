const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
let N = Number(input[0]);
let arr = input.slice(1);

let graph = {};
//트리 생성 
class Tree {
    constructor(val){
        this.val = val;
        this.leftNode = null;
        this.rightNode = null;
    }
    setVal(val) { 
        this.val = val;
    }
    setLeft(node){
        this.leftNode = node;
    }
    setRight(node){
        this.rightNode = node;
    }
}

const nodes = {};
arr.forEach((x)=>{
    let [parent, left ,right] = x.split(' ') ;
    if(!nodes[parent]){ // 만약 부모 노드 없을 때 
        nodes[parent] = new Tree(parent); // 새로운 트리 객체 생성해서 만들어줌 
    }
    if(left!=='.'){
        nodes[parent].setLeft(left); //왼쪽 자식 설정 
    }
    if(right!=='.'){
        nodes[parent].setRight(right); //오른쪽 자식 설정 
    }
    
})
let preOrderResult = '';
let inOrderResult =''
let postOrderResult = '';
function preOrder(node){ //부모 - 왼- 오 순서로 재귀 

    if(!node) {
        return;
    }
    preOrderResult += node.val;
    preOrder(nodes[node.leftNode]);
    preOrder(nodes[node.rightNode]);
};

function inOrder(node){ // 왼 -부모 -오 순서로 재귀 

    if(!node) {
        return;
    }
    inOrder(nodes[node.leftNode]);
    inOrderResult += node.val;
        // console.log(node.val);
    inOrder(nodes[node.rightNode]);
};
function postOrder(node){ //왼 - 오 - 부모 순서로 재귀 

    if(!node) {
        return;
    }
    postOrder(nodes[node.leftNode]);
    postOrder(nodes[node.rightNode]);
    postOrderResult +=node.val;
    // console.log(node.val);
};


preOrder(nodes['A']);
inOrder(nodes['A']);
postOrder(nodes['A']);
console.log(preOrderResult);
console.log(inOrderResult);
console.log(postOrderResult);
