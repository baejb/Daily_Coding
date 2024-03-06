const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
const N = Number(input[0]);
const arr = input.slice(1);
const time = [];

// 입력을 파싱하여 시간 배열로 변환
arr.forEach((element) => {
    time.push(element.split(' ').map(Number));
});

// 회의 시간을 끝나는 시간을 기준으로 정렬
time.sort((a, b) => {
    if(a[1] === b[1]){ //만약 같을 땐 시작시간이 작은걸로 정렬 
        return a[0]-b[0]
    } else{
        return a[1] - b[1]
    }
  });

const selectedMeetings = []; // 선택된 회의들을 담을 배열
let lastEndTime = 0; // 이전 회의의 종료 시간
console.log(time);
// 그리디 알고리즘을 사용하여 가능한 최대 회의 수 찾기
for (const meeting of time) { //정렬된 회의 시간을 하나씩 뽑아서 
    const [start, end] = meeting; // 시작 ,종료 시간을 변수로 두고 끝나는시간이 시작시간보다 작을 때 push
    if (start >= lastEndTime) {
        selectedMeetings.push(meeting);
        lastEndTime = end; //이전회의 종료시간에 현재 회의 종료 시간을 저장 
    }
}

console.log(selectedMeetings.length);
