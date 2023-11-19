function solution(bridge_length, weight, truck_weights){
    let sec = 0;
    let sum = 0;
    let drivingArr = [] ; //다리를 건너는 트럭 
    while(truck_weights.length ||drivingArr.length){
        
        if(sum +truck_weights[0] <= weight && drivingArr.length <=bridge_length){
            let truck = truck_weights.shift();
            sum+=truck;
            drivingArr.push([truck, sec + bridge_length]); // 트럭의 무게, 나갈 시간
            sec++;
           
        }
        else {
            
            const [truck, totalSec] = drivingArr.shift();
            if (sec <totalSec) { 
              sec = totalSec; 
            }
            sum -= truck; 
          }
        }
    
    return sec +1;
}
