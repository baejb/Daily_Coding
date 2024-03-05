const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let T = Number(input[0]);
let arr=[]; 
for(let i = 0 ; i<T ; i++){
    let func = input[i*3+1].split(''); //함수를 하나씩 문자열로 나눠서 배열로 저장 ['R', 'D', 'D'] 
    let N = Number(input[i*3+2]); // 배열의 원소 개수 
    if(N!==0){ // 만약 원소 개수가 0이 아닐 때 
    arr = input[i*3+3].slice(1, -1).split(',').map(Number); // arr에 string으로 들어온 값을 배열로 저장 
    }else if(N===0){ //만약 N이 0 이면 arr는 빈배열로 선언 
        arr= [];  
    }
    let thisError = false; //에러 판별 불린값 
    let reverse = true ; // true 는 정방향 , false는 역뱡향 
    let rNum = 0; // 역순을 진행할지 말지 판별 
    
    for(let j = 0; j<func.length; j++){ // 함수의 길이만큼 실행 
        if(func[j]==='R'){
            reverse = !reverse; //역방향일 땐 정방향으로 정방향일땐 역방향으로 바꾸기 위함 
            rNum ++; // 리버스 개수 증가 
           
        }
        if(func[j]==='D'){
            if(arr.length === 0){ //만약 arr길이가 0인데 D 를 하면 error를 출력해주고 에러라는것을 표시하기위해 thisError를 true 로
                console.log('error');
                thisError = true;
                break;
            }
            if(reverse){ // 만약 reverse가 true 이면 정방향이므로 앞쪽에서 원소 제거해주고 , false 이면 역방향이므로 뒤쪽에서 원소를 제거해줌 
                arr.shift(); 
            }else{
                arr.pop();
            }
            
        }

    }
    if(rNum%2 !==0){ // 만약 rNum이 R이 나온횟수인데 짝수이면 원래상태이고 홀수일땐 방향을 바꿔준것이므로 reverse() 실행 / 시간을 위해 reverse()는 마지막에 한번만 실행 
        arr.reverse();
    }
    if(!thisError){ //에러가 아닐때만 배열 출력 / 그냥 arr 를 출력하면 공백이 추가되어 에러가 뜸 따라서 join으로해서 문자열로 출력해줘야함 
        console.log(`[${arr.join(',')}]`);
    }
    

}

