function solution(number, k) {
    var answer = '';
    let stack = []; // 숫자를 담을 스택 생성

    // 문자열 순회
    for (let i = 0; i < number.length; i++) {
        let current = number[i];
        
        // 스택의 마지막 숫자가 현재 숫자보다 작으면 스택에서 제거하고 k 감소
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < current) {
            stack.pop();
            k--;
        }
        
        // 현재 숫자를 스택에 추가
        stack.push(current);
    }

    // 남은 k만큼 스택에서 숫자를 제거 (제거하지 않고 남은 숫자가 가장 큰 수)
    stack.splice(stack.length - k, k);
    
    // 스택 내의 숫자들을 문자열로 결합하여 반환
    answer = stack.join('');
    
    return answer;
}


