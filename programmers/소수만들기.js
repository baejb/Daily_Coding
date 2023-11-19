function solution(nums) {
    let answer = 0;
    
    for(let i = 0 ;i< nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            for(let k= j+1; k<nums.length; k++){
                let sum = nums[i]+nums[j]+nums[k];
                let cnt = 0;
                for(let num=1; num<=sum; num++){
                    if(sum% num === 0){
                        cnt ++
                    }
                    if(cnt >2){
                        break;
                    }
                }
                if(cnt===2){
                    answer++;
                }
                
            }
        }
    }
    
    return answer;
}
