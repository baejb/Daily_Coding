function solution(x, y, n) {
    var answer = -1;
    
    let queue = [[y,0]];
 
    while(queue.length){
        let [now , count] = queue.shift();
        
        if(now === x) {
            answer = count;
            return answer;
        }
        
        if(now % 3 === 0 && y/3 >=x) queue.push([now/3 , count + 1]);
        
        if(now % 2 === 0 && y/2 >=x) queue.push([now/2 , count + 1]);
        
        if(now - n >= x) queue.push([now-n , count+1]);
        
        
        
      
        
    }
    
    
    
    
    return answer;
}
