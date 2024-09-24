function solution(number, limit, power) {
    let answer = 0;
    let divisorArr = [];
 const getDivisors = (num) => {
    const divisors = [];
    for(let i = 1 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0) {
            divisors.push(i);
            if(num / i != i) divisors.push(num / i);
        }
    }
    return divisors.length;
}

    for(let i =1; i<= number ; i++){
        let ans = getDivisors(i);
        if(limit < ans){
            divisorArr.push(power);
        }else{
            divisorArr.push(ans);
        }
    }
    divisorArr.forEach(x => answer+=x)
    return answer;
}
