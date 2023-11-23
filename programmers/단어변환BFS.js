function solution(begin, target, words) {
    var answer = 0;
    let queue = [];
    let visited = [];

    if(!words.includes(target)){
        return answer;
    }
    queue.push([begin,answer]);
   
    while(queue.length){ // 큐가 비어있을 때 까지 실행 
        
        let [word, cnt] = queue.shift(); // 맨 앞요소를 꺼냄 
        console.log(word);
        console.log(cnt);
        console.log(visited);
        if (word === target) { 
            return cnt;
        }
        for(let i =0 ; i<words.length ; i++){
            let count = 0;
            for(let j =0 ; j<begin.length; j++){
                if(word[j]!==words[i][j]){
                    count ++;
                }
            }
            if(count === 1){
                if(!visited.includes(words[i])){
                    queue.push([words[i],cnt+1]);  
                    visited.push(words[i]);
                }
            } 
        }
    }
    
    console.log(queue);
    
    return answer;
}