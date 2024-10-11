function solution(n, results) {
    var answer = 0;
    let result = Array.from({length: n+1} , ()=>Array(n+1).fill(0));
    
    results.forEach(([w,l])=>{
        result[w][l] = 1;
        result[l][w] = -1;
    })
    for(let i =1; i<=n ;i++){
        for(let j=1;j<=n; j++){
            for(let k =1; k<=n; k++){
                if(result[j][i] === 1 && result[i][k] === 1){
                    result[j][k] = 1;
                }
                if(result[j][i] === -1 && result[i][k] === -1){
                    result[j][k] = -1;
                }
            }
        }
    }
    for(let i =1; i<=n; i++){
        let count = 0;
        for(let j =1; j<=n ; j++){
            if(result[i][j]!==0){
                count++;
            }
        }
        if(count === n-1) answer++;
    }

    return answer;
}
