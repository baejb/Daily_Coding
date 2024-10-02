const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
let T = Number(input[0]);
let index = 1;

function distance(x1, x2 ,y1, y2){
    return Math.abs(x1-x2) + Math.abs(y1-y2);
}

for(let i =0; i< T ;i++){
   let points = [];
   let n = Number(input[index++]);
   let answer = "sad";
   for(let j =0; j< n+2 ;j++){
        let [x, y] = input[index++].split(" ").map(Number);
        points.push([x,y]);
   }
  
   let visited = Array(points.length).fill(false);
   let queue = [0]; 
   visited[0] = true ;
   
   while(queue.length){
    let current = queue.shift();

    if(current === points.length-1){
        answer = "happy";
        break;
    }
    for(let i = 0; i<points.length ; i++){
        if(!visited[i]){
            let [curX, curY] = points[current];
            let [nextX , nextY] = points[i];

            let dis = distance(curX,nextX,curY,nextY);
            if(dis <= 1000){
                visited[i] = true;
                queue.push(i);
            }
        }
    }
   }
   console.log(answer);
}

