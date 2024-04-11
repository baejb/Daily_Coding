const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let index = 0;
while (true) {
    const [N, M] = input[index].split(' ').map(Number);
    if (N === 0 && M === 0) break;

    let answer = 0; 
    let pN = index + 1; 
    let pM = pN + N; 

    while(pN <= index + N && pM <= index + N + M){
        let nNum = Number(input[pN]);
        let mNum = Number(input[pM]);
        
        if(nNum === mNum){
            answer++;
            pN++;
            pM++;
        } else if (nNum < mNum){
            pN++;
        } else {
            pM++;
        }
    }
    console.log(answer);
    index += N + M + 1;
}