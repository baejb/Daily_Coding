function solution(maps) {
    let answerL = 0;
    let answerE = 0;
    // 시작 지점에서 레버까지 최소 시간 + 레버에서 출구까지 최소 시간 더하기 
    let M = maps.length;
    let N = maps[0].length;
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    let queueS= [];
    let queueE = [];
    let visitedS = Array.from({length: M}, () => Array(N).fill(false));
    let visitedE = Array.from({length: M}, () => Array(N).fill(false));
    function findLocation( location) {
    
    for(let i =0; i< maps.length; i++){
        for(let j =0; j<maps[i].length; j++){
            if(maps[i][j] === location){
                return [i,j,0];
            }
        }
     }
    }
    
  
    let startLocation = findLocation("S");
    let leverLocation = findLocation("L");
    let exitLocation = findLocation("E");
    queueS.push(startLocation);
    visitedS[startLocation[0]][startLocation[1]] = true;
    let [Lx, Ly] = leverLocation;
    while(queueS.length){
        let [x , y, count] = queueS.shift();
    
        if(x === Lx && y === Ly) {
            answerL += count;
           
            break;
        }
        
        for(let i =0; i<4; i++){
            let tx = x + dx[i]; 
            let ty = y + dy[i];
            
            if(tx >=0 && tx < M && ty >=0 && ty < N  && !visitedS[tx][ty]){
                if(maps[tx][ty] === "O" || maps[tx][ty] === "L" || maps[tx][ty] === "E" ){
                visitedS[tx][ty] = true;
                queueS.push([tx,ty, count+1])
                };
                
            }
        }
    }
     queueE.push(leverLocation);
    visitedE[Lx][Ly] = true;
    let [Ex, Ey] = exitLocation;
      while(queueE.length){
        let [x , y, count] = queueE.shift();
    
        if(x === Ex && y === Ey) {
            answerE += count;
            break;
        }
        
        for(let i =0; i<4; i++){
            let tx = x + dx[i];
            let ty = y + dy[i];
            
            if(tx >=0 && tx < M && ty >=0 && ty < N && !visitedE[tx][ty]){
             if(maps[tx][ty] === "O" || maps[tx][ty] === "E" || maps[tx][ty] === "L" || maps[tx][ty] === "S"){
                visitedE[tx][ty] = true;
                queueE.push([tx,ty, count+1]);
             }
            }
        }
    }
   

    return answerE === 0 || answerL ===0 ? -1 : answerL + answerE;
}
