function solution(fees, records) {
    var answer = [];
    function timeCheck(time){
        let [hour, minute] = time.split(":").map(Number);
        return hour * 60 + minute
    }
    let parking = {};
    let timetable=[];
    
    records.forEach((x) => {
        let [time, number, state] = x.split(" ");
        let t = timeCheck(time);
        if(!parking[number]) parking[number] =[];
        parking[number].push([ t , state , number])
    })
  
    for(let cal in parking){
        let inout = 0;
        let total = 0;
        let i = 0;
        let num = 0;
        while(parking[cal].length){
            let [time, state, number] = parking[cal].shift();
            num = number;
            if(parking[cal].length === 0 && state === "IN"){
                inout += timeCheck("23:59") - time;              
            }
            else if(state ==="IN"){
              total +=time ;
                i++;
            } 
            else if(state === "OUT") {
                total = time - total;
                i++
            }
            if(i === 2){
                inout += total;
                total = 0; 
                i = 0; 
            } 
        }
        timetable.push([num,inout]);
       
    }
    function parkingFee(time){
        let sum = 0;
        if(time > fees[0]){
            let t = time-fees[0] 
            let money = 0;
            money = Math.ceil(t / fees[2] ) * fees[3];
            sum = fees[1] + money ; 
        }
        else{
            sum = fees[1];
        }
        return sum;
    }
    timetable.sort((a,b) => a[0]-b[0]);
    timetable.forEach((x) => {
       answer.push(parkingFee(x[1]));
    })
    return answer;
}
