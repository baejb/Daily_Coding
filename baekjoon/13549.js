const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, K] = input[0].split(" ").map(Number);
const end = 100000;
let answer = 0;
let queue = [ [N, 0] ];
let visited = Array(100001).fill(false);
visited[N] = true;
while(queue.length){
    let [now , second] = queue.shift();
    if(now === K) {
        answer = second;
        break;
     
    }
    if(now * 2 <= end && !visited[now * 2]){
        visited[now*2] = true;
        queue.unshift([now * 2 , second]);
    }
    
    if( now -1 >= 0 && !visited[now-1]){
        visited[now-1] = true;
        queue.push([now -1 , second + 1]);
    }
    if(now+1 <=end && !visited[now+1]){
        visited[now+1] = true;
        queue.push([now + 1 , second +1 ]);
    }
    
}
console.log(answer);