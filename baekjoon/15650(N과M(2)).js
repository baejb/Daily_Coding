const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
//1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
//고른 수열은 오름차순이어야 한다.
let result = [];
let visited = new Array(N + 1).fill(false); // visited는 

function dfs(cnt, idx, sequence) { //cnt는 자리 수 , idx는 인덱스 ,sequence 는 현재 수열 
    if (cnt === M) {
        result.push(sequence.join(' ')); //sequence 배열의 원소를  ' ' 을 포함해서 문자열로 변환해 result 로 push [1,2] => 1 2 로 
        return;
    }

    for (let i = idx; i <= N; i++) {
        if (!visited[i]) { //방문하지 않은 숫자이면 
            visited[i] = true; // 방문 처리하고 
            sequence.push(i); // sequence 배열에 push 
            dfs(cnt + 1, i + 1, sequence); // dfs 실행 , cnt 와 인덱스를 1씩 증가시켜줌 
            sequence.pop(); // 넣어준 거 pop  
            visited[i] = false; //
        }
    }
}

dfs(0, 1, []);

console.log(result.join('\n'));
