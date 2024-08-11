function solution(s, skip, index) {
    var answer = '';
    const alpha = Array.from({ length: 26 }, (v, i) => String.fromCharCode(97 + i));
    let newAlpha = alpha.filter(x => !skip.includes(x))
    let i = 0;
    while(i < s.length){
        let find = s[i];
        let findIndex = newAlpha.indexOf(find) + index;
        if(findIndex >= newAlpha.length){
            findIndex = findIndex % newAlpha.length;
        } 
        answer += newAlpha[findIndex];
        i++;
    }
  
    return answer;
}
