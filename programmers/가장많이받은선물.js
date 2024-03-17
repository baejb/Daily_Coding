function solution(friends, gifts) {
    let answer = Array(friends.length).fill(0);
    const graph = {}; // 주고 받은 선물 
    const gift = {}; // 선물지수 
    const visited = {};
    friends.forEach((x)=>{
        if(!graph[x]){
            graph[x] = Array(friends.length).fill(0);
            visited[x] = Array(friends.length).fill(false);
            gift[x] = Array(3).fill(0); //준 선물 , 받은 선물 , 선물 지수 
        }
    })
    //주고 받은 선물 , 각 친구들은 인덱스로 비교 함 
    //선물 지수를 계산하기 위해 준 선물 ,받은선물 계산
    gifts.forEach((x)=>{
        let [give, take] = x.split(' ');
        for(let i =0; i<friends.length; i++){
            if(take === friends[i]){
                graph[give][i]++;
                gift[take][1]++;
            }
            if(give === friends[i]){
                gift[give][0]++;
            }
           
        }})
    //선물 지수 계산 
    for(let name in gift){
        gift[name][2] = gift[name][0] - gift[name][1];
    }
    // 각 멤버 별 선물을 얼마나 받는지 계산 
    
    for(let member in graph){
        let memberIndex = Object.keys(graph).indexOf(member);
       
        graph[member].forEach((x, index)=>{
            let giveto = friends[index];
  
            if(!visited[member][index] && !visited[giveto][memberIndex]){
    
                visited[member][index] = true;
                visited[giveto][memberIndex] = true;
                if(graph[giveto][memberIndex] < x){
                    answer[memberIndex]++;
                }if(graph[giveto][memberIndex] > x){
                    answer[index]++;
                }if(graph[giveto][memberIndex] === x ){
                    if(gift[member][2] > gift[giveto][2]){
                        answer[memberIndex]++;
                    } else if(gift[member][2]< gift[giveto][2]){
                        answer[index]++;
                    } 
                }
            }
        })
    }
 
    return Math.max(...answer);
}