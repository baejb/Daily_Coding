const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
arr.sort((a,b)=> a-b);
//1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
//고른 수열은 오름차순이어야 한다.
let result = [];
let visited = new Array(N + 1).fill(false); 

function dfs(cnt, idx, sequence) { //cnt는 자리 수 , idx는 인덱스 ,sequence 는 현재 수열 
    if (cnt === M) {
        result.push(sequence.join(' ')); //sequence 배열의 원소를  ' ' 을 포함해서 문자열로 변환해 result 로 push [1,2] => 1 2 로 
        return;
    }

    for (let i = idx; i < arr.length; i++) {
        if (!visited[i]) { //방문하지 않은 숫자이면 
            visited[i] = true; // 방문 처리하고 
            sequence.push(arr[i]); // sequence 배열에 push 
            dfs(cnt + 1, idx , sequence); // dfs 실행 , cnt 와 인덱스 , sequence 배열 재귀 실행 
            visited[i] = false; //
            sequence.pop(); // 넣어준 거 pop  
            
        
    }
}
}

dfs(0, 0, []);

console.log(result.join('\n'));
