function solution(s) {
    var answer = '';
    for(let i =0; i<s.length; i++){
        if(i === 0 ){
            answer+=(s[i].toUpperCase());
            s[i]=s[i].toUpperCase();
        }
        else if(s[i-1] === ' '){
            answer+=(s[i].toUpperCase());
            s[i]=s[i].toUpperCase();
            
            
        }else{
        answer+=s[i].toLowerCase();
        }
        
    }
    console.log(answer);
    
    return answer;
}