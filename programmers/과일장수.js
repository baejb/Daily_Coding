function solution(k, m, score) {
    let answer = 0;
    let minScore= [];
    score.sort((a,b) => a-b);
    let i = score.length;
    while(i > 0 ){
        if(i >= m ){
            let ans = i - m    
            minScore.push(ans);
            i = ans; 
        }
        else{
            break;
        }
    }
    minScore.forEach((x)=>{
        answer += score[x] * m ;
    })
    return answer;
}
