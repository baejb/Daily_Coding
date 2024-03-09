function solution(n, lost, reserve) {
    let answer = n ; 
    
    let lostStudents = lost.filter(student => !reserve.includes(student)); // 여벌의 체육복이 없는 학생 필터링
    let reserveStudents = reserve.filter(student => !lost.includes(student)); // 잃어버리지 않은 학생 필터링
    lostStudents.sort((a,b)=>(a-b));
    reserveStudents.sort((a,b)=>(a-b));
    for (let i = 0; i < lostStudents.length; i++) {
        for (let j = 0; j < reserveStudents.length; j++) {
            if (Math.abs(lostStudents[i] - reserveStudents[j]) === 1) { // 두 학생의 번호 차이가 1인 경우
                lostStudents.shift() // 체육복을 빌려줄 수 있는 경우
              
              
            }
        }
    }
    
    return answer-lostStudents.length;
}