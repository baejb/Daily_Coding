function solution(name) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let answer = 0;

    // 상하 이동 횟수 계산
    for (let i = 0; i < name.length; i++) {
        const char = name[i];
        const num = alphabet.indexOf(char); //알파벳의 인덱스를 찾아서 
        answer += Math.min(num, 26 - num); // 상하 이동은 알파벳 순서에 따라 N (13 을 기준으로 위로갈지 앞으로갈지 더 작은 수 계산)
    }

    // 좌우 이동 횟수 계산
    let minMove = name.length - 1; // 모든 문자를 오른쪽으로 이동하는 경우
    for (let i = 0; i < name.length; i++) {
        // 다음 이동할 위치까지 연속된 'A'의 개수 세기
        let nextIndex = i + 1;
        while (nextIndex < name.length && name[nextIndex] === 'A') {
            nextIndex++;
        }
        //현재 위치에서 오른쪽으로 이동하는 경우와 좌측으로 이동한 후 오른쪽으로 이동하는 경우 중에서 더 작은 값을 선택
    
        // const move = i + name.length - nextIndex + Math.min(i, name.length - nextIndex); // 좌우 이동 횟수 계산
        // minMove = Math.min(minMove, move);
        //순서대로 가는 것(name.length)
        //뒤로 돌아 가는 것(i * 2 + name.length - idx)  : 오른쪽으로 이동했다가 연속된A 를 만났을 때 다시 왼쪽으로 가는경우  처음 -> A -> 처음 -> 끝쪽
        //뒷 부분을 먼저 입력하는 것(i + 2 * (name.length - idx)) : 왼쪽으로 이동했다가 연속된 A 를 만났을 때 다시 오른쪽으로 가는경우 끝 -> A -> 끝 -> 처음쪽
      
        minMove = Math.min(
            minMove,
            i * 2 + name.length - nextIndex,
            i + 2 * (name.length - nextIndex),
          );
    }

    return answer + minMove;
}
