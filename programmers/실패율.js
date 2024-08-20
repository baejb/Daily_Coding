function solution(N, stages) {
    let answer = [];
    let fail = [];
    function failrate (stageNum)  {
        let arr = stages.filter((x => x >=stageNum));
        let notClear = arr.filter((x => x === stageNum));
        if(notClear === 0 ) {
            return 0;
        }
        return notClear.length / arr.length ;
    }
    
    for(let i =1;i <=N ; i++){
        let ans = failrate(i);
        fail.push([ans,i]);
        
    }
    fail.sort((a,b) => b[0]-a[0])
   
    return fail.map((x) => x[1]);
}
