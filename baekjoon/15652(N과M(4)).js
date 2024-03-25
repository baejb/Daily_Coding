const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
//1부터 N까지 자연수 중에서 M개를 고른 수열 , 중복 허용 
//고른 수열은 비내림차순 
let result = [];


function dfs(cnt, idx, sequence) { //cnt는 길이 , idx는 인덱스 ,sequence 는 현재 수열 
    if (cnt === M) {
        result.push(sequence.join(' ')); //sequence 배열의 원소를  ' ' 을 포함해서 문자열로 변환해 result 로 push [1,2] => 1 2 로 
        return;
    }

    for (let i = idx; i <= N; i++) {
            sequence.push(i); // sequence 배열에 push 
            dfs(cnt + 1, i , sequence); // dfs 실행 , cnt  증가 , 인덱스는 처음부터 
            sequence.pop(); // 넣어준 거 pop  

        }
    }


dfs(0, 1, []);

console.log(result.join('\n'));
