const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const A = input[0];
const B = input[1];
const C = input[2];

const result = String(A * B * C) ;
let graph = [];
for(let i =0 ; i<result.length;i++){
    if(!graph[result[i]]){
        graph[result[i]] = 1 ;
    } else{
        graph[result[i]] += 1;
    }
}

for(let i = 0; i< 10; i++){
    if(!graph[i]){
        graph[i] = 0;
    }
   
}
for(let i =0 ;i<graph.length; i++){
    console.log(graph[i]);
}
