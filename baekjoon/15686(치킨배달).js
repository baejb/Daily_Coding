const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const city = [];
let house = [];
let chicken = [];
const check = new Array(chicken.length).fill(false);
let answer = Infinity;
for(let i = 1; i<=N; i++){
    let line = input[i].split(' ').map(Number);
    city.push(line);
}

for(let i =0; i< N ;i++){
    for(let j =0; j<N; j++){
        if(city[i][j] === 1  ){
            house.push([i,j]);
        }
        else if(city[i][j] === 2) {
            chicken.push([i,j]);
        }
    }
}
function getDistance(house, chicken) {
    return Math.abs(house[0] - chicken[0]) + Math.abs(house[1] - chicken[1]);
}
function getMinDistance () {
    let sum = 0;
    house.forEach((h)=>{
        let min = Infinity;
        chicken.forEach(( c,index) =>{
            if(check[index]){
                const sc = chicken[index];
                min = Math.min(min, getDistance(h,sc));
            } 
        })
        sum += min;
    })
    return sum;
}
function dfs (idx , cnt) {
    if(cnt === M) {
        answer = Math.min(answer , getMinDistance()); 
        return ;
    } else {
        for(let i = idx; i < chicken.length; i++){
            if(check[i]){
                continue;
            } 
            check[i] = true ;
            dfs(i, cnt + 1);
            check[i] = false ;
        }
    }
}

dfs(0,0);
console.log(answer);
