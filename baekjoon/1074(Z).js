const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const [N,r,c] = input[0].split(' ').map(Number);

/*solution 함수 - 분할 정복 재귀 
주어진 좌표 r,c 가 재귀적으로 주어지는 row ,col 과 같으면 함수 종료 (정답)
만약 영역 내에 있다면 분할하여 탐색 
왼쪽 위 , 오른쪽 위 , 왼쪽 아래 , 오른쪽 아래 순서대로 방문 
영역 밖에 있다면 해당 영역의 크기만큼 result 에 더해줌 (해당 영역 만큼 스킵하는 것 ) 
*/ 
let result = 0;
function solution (row, col, n ) {
    if(row === r && col === c ){
        console.log(result);
        return;
    }
    if(r >=row && r < row + n && c >=col && c < col + n) {
        //영역을 포함하는지 확인 
        n = parseInt( n / 2 ); // 4등분
        solution(row , col , n ); //왼쪽 상단 
        solution(row , col + n , n ); // 오른쪽 상단 
        solution(row + n , col , n); //왼쪽 하단 
        solution(row + n ,col + n , n); // 오른쪽 하단 
    }else {
        result += n*n ;
    }
}
solution(0,0,Math.pow(2,N));

/*
만약 N,r,c = 2,3,1 이면 
4*4 
0  1  4  5
2  3  6  7 
8  9  12 13
10 11 14 15
1. solution ( 0, 0, 4) start 
영역 포함 if 문 통과 
n = 2 
solution(0,0,2);
solution(0,2,2);
solution(2,0,2);
solution(2,2,2);
순으로 재귀 함수 실행 
1-1. solution(0,0,2);
영역 포함 if문에서 r < row + n 즉 3 < 0 + 2 에서 false 즉 왼쪽 상단 영역은 포함 x 
else 문으로 이동 result +=  n* n = 4 
1-2 solution(0,2,2);
영역 포함 if문에서 r < row + n 즉 3 < 0 + 2 에서 false 즉 왼쪽 상단 영역은 포함 x 
else 문으로 이동 result +=  n* n = 8 (4 + 4)
1-3 solution(2,0,2);
영역 포함 if문에서 포함 
n = 2 /2 = 1 
solution(0,2,1);
solution(0,3,1);
solution(3,0,1);
solution(3,3,1);
. 
. 
.
row, col 일치할때까지 분할정복 재귀실행 



*/ 