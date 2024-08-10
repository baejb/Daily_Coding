function solution(cards1, cards2, goal) {
    var answer = "Yes";
    
    while(goal.length){
        let word = goal.shift();
        
        if(word === cards1[0]){
            cards1.shift();
        }
        else if(word === cards2[0]){
            cards2.shift();
        }
        else{
            answer = "No";
            break;
        }

    }
    
    
    return answer;
}
