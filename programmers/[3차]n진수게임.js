function solution(n, t, m, p) {
    var answer = '';
    let totalLen = t * m ;
    let arr = [];
    for(let i = 0 ; i<totalLen ; i++) {
        arr.push(...i.toString(n).split(""));
    }
    
    let i =0;
    for(let i =0; i<arr.length ;i++){
        if(i % m === p-1){
            answer+=arr[i].toUpperCase();
        }
        if(answer.length === t){
            break;
        }
    }
    return answer;
}
