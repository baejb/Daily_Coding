function solution(park, routes) {
    var answer = [];
    let N = park.length;
    let M = park[0].length;
    let start;
    const directions = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
     };
    for(let i =0; i<N ; i++){
        for(let j =0 ; j<M ; j++){
            if(park[i][j]==='S'){
                start=[i,j];
            }
        }
    }
    
    for(let route of routes){
        let [op, n] = route.split(' ');
        n = Number(n);
        let [nx, ny] = start;
        let step = 0;
        while(step < n){
            nx += directions[op][0];
            ny += directions[op][1];
           if (nx < 0 || N <= nx || ny < 0 ||M <= ny || park[nx][ny] === "X") break;
             step++;
         
            if (step === n) start = [nx, ny];
        }
        
    }
    
    return start;
}
