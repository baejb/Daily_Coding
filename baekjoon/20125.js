const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input[0]);
const arr = [];
const answer = [];
for(let i =1; i<=N ;i++){
    arr.push(input[i].split(""));
}

for(let i =1; i< N-1; i++){
    for(let j =1; j< N-1 ; j++){
        if(arr[i][j] === "*" && arr[i-1][j] === "*" &&arr[i][j-1] === "*" && arr[i][j+1] === "*" &&arr[i+1][j] === "*"  ){
            console.log(i+1, j+1);
            findBodyLen(i,j);
            break;
            
        }
    }
}
function findBodyLen(x,y){
    let leftLen = 0;
    let rightLen = 0;
    let waistLen = 0;
    let leftLegLen = 0;
    let rightLegLen = 0;
    for(let i = y-1; i >=0 ; i-- ){
        if(arr[x][i] ==="*") leftLen++;
    }
    answer.push(leftLen);

    for(let i = y+1; i<N ; i++){
        if(arr[x][i] === "*") rightLen++;
    }
    answer.push(rightLen);
    for(let i = x+1; i<N ; i++){
        if(arr[i][y] === "*") waistLen++;
    }
    answer.push(waistLen);
    for(let i = x+1+waistLen ; i <N ;i++){
        if(arr[i][y-1] === "*") leftLegLen++;
    }
    answer.push(leftLegLen);
    for(let i = x+1+waistLen ; i <N ;i++){
        if(arr[i][y+1] === "*") rightLegLen++;
    } 
    answer.push(rightLegLen);
    
    console.log(answer.join(" "));
}

