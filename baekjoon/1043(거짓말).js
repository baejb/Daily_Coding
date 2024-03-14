const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
let [N, M] = input[0].split(' ').map(Number); // N 사람 수 , M 파티 수 
let [knowNum, ...knowPeople] = input[1].split(' ').map(Number); //진실을 아는 사람 수 , 번호 
let result = 0;
let party = [];
for (let i = 2; i < 2 + M; i++) {
    let arr = input[i].split(' ').map(Number);
    party.push(arr);
}

let set = new Set(knowPeople); //중복을 제외하기 위해 set으로 선언 

if (set.size === 0) { //만약 set이 0이라면 바로 M 아는사람이 없다는것 
    console.log(M);
} else {
    let knowlie = 0;

    while (true) {
        let updated = false; // 파티에 참석한 진실을 아는 사람이 있는 경우 업데이트 여부를 체크

        for (let i = 0; i < party.length; i++) {
            let num = party[i][0]; //파티 참석 수 

            for (let j = 1; j <= num; j++) {
                if (set.has(party[i][j])) { //만약 거짓말인것을 아는사람이면 
                    let temp = party[i].slice(1); // 파티에 참석한 사람
                    temp.forEach(person => set.add(person)); // 같이파티에 참석한 사람들을 추가해줌
                    updated = true; // 파티에 참석한 진실을 아는 사람이 있으므로 업데이트
                    party.splice(i, 1); // 현재 파티를 삭제해줌
                    break; //다음 파티로 이동 
                }
            }
        }

        if (!updated) {
            break; // 업데이트가 없는 경우 반복문을 종료
        }
    }

    party.forEach((x) => { //파티에서 거짓말을 못하는 경우를 세어줌 
        for (let i = 1; i < x.length; i++) {
            if (set.has(x[i])) {
                knowlie++; 
                break;
            }
        }
    });

    console.log(party.length - knowlie);
}
