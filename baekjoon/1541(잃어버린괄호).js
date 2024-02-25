const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let words = input[0].split('-');
/*가장 최소가 되기 위해선 마이너스 뒤에 나오는 것들은 다 더해줘야됨 */ 
/*-를 기준으로 나눈 후 +를 포함하는 것들은 - 해주면 됨 */
let answer = [];
words.forEach((item) => {
    if(item.includes("+")){
        let sum = 0;
        item = item.split('+').map(Number); // + 가 포함된 것들은 다시 + 를 기준으로 나눔 (숫자만 나옴)
        item.forEach((x)=> sum+= x); // 더해주어 answer 에 넣어줌 
        answer.push(sum)
    } else {
        answer.push(Number(item));
    }
})
console.log(answer.reduce((pre , cur)=> pre - cur)); /*마이너스가 나오기 전 값에서 마이너스가 나온 후값을 빼주면 최소값임 */ 