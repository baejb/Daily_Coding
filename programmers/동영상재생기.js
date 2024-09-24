function solution(video_len, pos, op_start, op_end, commands) {
    let answer = '';
    function timeChange(time){
        let [minute , second] = time.split(":").map(Number);
        return minute*60+second;
    }
    let nowTime = timeChange(pos);
    let endTime = timeChange(video_len);
    let startOp = timeChange(op_start);
    let endOp = timeChange(op_end);
    
    function checkPanel(command, time){
        let t = time;
        if(time >= startOp && time <= endOp){
                t = endOp;
        }
        if(command === "next"){
            t += 10 ;
            if(t >= startOp && t<= endOp){
                nowTime = endOp;
            }else if( endTime - t < 10) {
                nowTime = endTime
            }
            
            else {
                nowTime = t;
            }
        }
        else if(command === "prev"){
             t -= 10 ;
            if(t < 0 ) t = 0;
            if(t >= startOp && t<=endOp){
                nowTime = endOp
            } else {
                nowTime = t;
            }
        }
    }
    commands.forEach((x)=>{
        checkPanel(x,nowTime);
    })
    
    let minute = Math.floor(nowTime / 60 );
    let second = nowTime % 60 ;
    let formattedTime = String(minute).padStart(2, '0') + ':' + String(second).padStart(2, '0');
    
    return formattedTime;
}
