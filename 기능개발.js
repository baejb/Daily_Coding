function solution(progresses, speeds) {
    var answer = [];
    let works =[];
    progresses.map((x,i)=>{
        let work = 0;
        while(x<100){
            x+=speeds[i];
            work+=1;
        }
        works.push(work);
        work=0;
    })

    while(works.length){
        let ans = 1;
        let work = works.shift();
        while(work >= works[0]){
            ans+=1 ;
            works.shift();
        }
        answer.push(ans);
    }
    return answer;
}
