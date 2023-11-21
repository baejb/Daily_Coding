function solution(begin, target, words) {
    var answer = 0;
    let visited = [];
    if (!words.includes(target)) {
        return answer;
    }
    
    function dfs ( word , plus){
        console.log(plus);
        if(word === target) {
            answer = plus;
            return  ;
        }
        if(plus > words.length){
            return 
        }
    for(let i =0 ; i<words.length ; i++ ){
        let count = 0;
        for(let j =0; j<begin.length ; j++){
            if(word[j]!==words[i][j]){
                count++;
            }
            if(count > 1){
                continue;
            }
        }
        if(count ===1){ //하나만 바뀐거
            if(!visited.includes(words[i])){
                visited.push(words[i]);
                console.log(words[i]);
                dfs(words[i],plus+1);
            }
            }
    }
    }
    dfs(begin,0);
    return answer;
}