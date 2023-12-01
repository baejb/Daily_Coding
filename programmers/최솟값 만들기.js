function solution(A,B){
    //최소 / 최대로 sort 한거 곱해주면될듯 
    var answer = 0;
    
    A.sort((a,b) => a - b);
    B.sort((a,b) => a - b)
    for(let i = 0 ;i<A.length ; i++){
        answer += A[i]*B[B.length-i-1]
    }

    return answer;
}