function solution(keymap, targets) {
    let answer = [];
    
    function findTargets(arr , target){
        for(let i =0; i<arr.length; i++){
            if(target === arr[i]){
                return i+1;
            }
        }
        return -1;
    }
    
    while(targets.length){
        let word = targets.shift();
        let num =word.length-1;
        let sumNum = 0;
        for(let i =0; i<word.length; i++){
            let arr =[];
            for(let j =0; j<keymap.length; j++){
                num = findTargets(keymap[j], word[i])
                if(num !== -1){
                    arr.push(num);
                }
            }
            if(arr.length === 0){
                sumNum = -1;
                break;
            }
            else{
            sumNum += Math.min(...arr);
            }
        }
        answer.push(sumNum)
    }
    return answer;
}
