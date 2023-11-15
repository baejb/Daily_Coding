function solution(numbers) {
    var answer = new Set();
    let arr = [];
    
    for(let i of numbers){
        arr.push(i);
    }

    function isPrime(N) {
        if (N === 1 || N === 0) return false;
        for (let i = 2; i <= Math.sqrt(N); i++) {
            if (N % i === 0) return false;
    }
    return true;
    }
    function getPermutation(arr, fixed){
        if(arr.length >= 1){
            for(let i = 0; i<arr.length ; i++){
                let newFixed = fixed + arr[i]; // 문자열 더하는 것임 
                const newArr = arr.slice() ; // 
                newArr.splice(i,1); // 고정한 요소를 제거한 배열 
                if(!answer.has(parseInt(newFixed)) && isPrime(parseInt(newFixed))){
                    answer.add(parseInt(newFixed));
                }
                getPermutation(newArr, newFixed);
            }
        }
    }
    getPermutation(arr,'');
    
    return answer.size;
}
