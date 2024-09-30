function solution(n, times) {
    let answer = 0; 
    let left = 0;
    let right = Math.max(...times) * n;
    while(left <= right ){
        let mid = Math.floor((left+right)/2);
        console.log(mid);
        let total = 0; 
        times.forEach((time) => {
            total += Math.floor(mid / time);
        })
        if(total >= n) {
            answer = mid ; 
            right = mid -1 ;
        } else{
            left = mid + 1 
        }
    }
    return answer;
}
