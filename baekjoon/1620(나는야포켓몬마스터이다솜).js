const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let [N ,M] = input[0].split(' ').map(Number);
let arr = {} ; //포켓몬이름 : 순서 로 저장할 객체 
let arr1 = []; // 포켓몬만 저장할 배열 
let arrM = []; // 찾고싶은 포켓몬 저장 
for(let i =1; i<= N ;i++){ //input 처리 
   arr[input[i]] = i;
   arr1.push(input[i]);
}
for(let i=0; i<M; i++){ //찾고싶은 포켓몬 input 처리 
    arrM.push(input[i+N+1]);
}

arrM.forEach(element => { //정답 출력 
    console.log(findElement(element));
});

function findElement (x){
    if(arr[x]){ //만약 x 가 포켓몬 이름으로 들어올 때 객체에서 찾기 
        return arr[x]
    }else{ // 만약 x 가 숫자로 들어올 땐 배열에서 인덱스로 찾기 
        return arr1[x-1]
    }
   
}