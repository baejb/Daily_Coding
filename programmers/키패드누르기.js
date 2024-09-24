function solution(numbers, hand) {
    let answer = '';
    
    // 키패드 좌표
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    
    // 초기 위치
    let leftPos = keypad['*'];
    let rightPos = keypad['#'];

    // 거리 계산 함수
    function getDistance(pos1, pos2) {
        return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
    }

    // 번호에 따라 손 선택
    function pressKey(num) {
        const pos = keypad[num];
        
        if ([1, 4, 7].includes(num)) {
            leftPos = pos;
            return 'L';
        } else if ([3, 6, 9].includes(num)) {
            rightPos = pos;
            return 'R';
        } else {
            const leftDist = getDistance(leftPos, pos);
            const rightDist = getDistance(rightPos, pos);

            if (leftDist === rightDist) {
                if (hand === 'right') {
                    rightPos = pos;
                    return 'R';
                } else {
                    leftPos = pos;
                    return 'L';
                }
            } else if (leftDist < rightDist) {
                leftPos = pos;
                return 'L';
            } else {
                rightPos = pos;
                return 'R';
            }
        }
    }

    for (let num of numbers) {
        answer += pressKey(num);
    }

    return answer;
}
