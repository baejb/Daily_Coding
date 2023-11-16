function solution(k, dungeons) {
    var answer = -1;
    
    let arr = dungeons.filter((x)=>x[0] <= k); // 최소 필요 피로도를 만족하는 던전들만 선택하기 위함 
    const visited = Array.from({length : arr.length}, () => false); 
    
    function dfs( hp , count) {
        for(let i =0 ; i<arr.length ; i++){
            
            if(!visited[i] && arr[i][0] <= hp){
                visited[i] = true;
                dfs(hp - arr[i][1], count + 1);
                visited[i] = false;
            }
        }
        answer = Math.max(answer, count);
    }
    dfs(k,0);
    
    
    return answer;
}
