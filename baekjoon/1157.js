const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const words = input[0].toUpperCase(); //대문자 소문자를 구별하지 않기때문

let graph = [];
for(let i=0 ; i<words.length ; i++){
    if(!graph[words[i]]){
        graph[words[i]] = 1 ;
    }
    else{
        graph[words[i]] += 1;
    }
}
// console.log(graph);
max = 0;
answer = '';
for( let word in graph){
    if(max < graph[word]){
        max = graph[word];
        answer = word;
    }
    else if( max === graph[word]){
        answer = '?';
        
    }
}
console.log(answer);