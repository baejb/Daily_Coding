function solution(plans) {
    var answer = [];
    let stack = [];
   
    function calcTime(time) {
        let [hour, minute] = time.split(":").map(Number);
        return hour * 60 + minute;
    }
    
    let plan = [...plans];
    plan.forEach(([s, t, w], index) => {
        plan[index][1] = calcTime(t);
        plan[index][2] = Number(w);   
    
   
    plan.sort((a, b) => a[1] - b[1]);
    
    while (plan.length > 0) {
        let [name, start, playtime] = plan.shift();
        
        if (plan.length > 0) {
            let nextStart = plan[0][1]; 
            
            if (start + playtime <= nextStart) {
                answer.push(name);
                let remainingTime = nextStart - (start + playtime);
                
              
                while (stack.length > 0 && remainingTime > 0) {
                    let [prevName, prevPlaytime] = stack.pop();
                    
                    if (remainingTime >= prevPlaytime) {
                        answer.push(prevName);
                        remainingTime -= prevPlaytime;
                    } else {
                        stack.push([prevName, prevPlaytime - remainingTime]);
                        remainingTime = 0;
                    }
                }
            } else {
               
                stack.push([name, playtime - (nextStart - start)]);
            }
        } else {
         
            answer.push(name);
        }
    }
    
    while (stack.length > 0) {
        let [name, playtime] = stack.pop();
        answer.push(name);
    }
    
    return answer;
}
