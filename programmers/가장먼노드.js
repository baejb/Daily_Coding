function solution(n, edge) {
    let dist = Array(n+1).fill(0);
    let visited = Array(n+1).fill(false);
    let graph = {};
    edge.forEach((x) => {
        let [n1, n2] = x ;
        if(!graph[n1]) graph[n1] = [];
        if(!graph[n2]) graph[n2] = [];
        graph[n1].push(n2);
        graph[n2].push(n1);
    })
    
    function bfs(){
        visited[1] = true;
        let queue = [[1]];
        
        while(queue.length){
            let [n] = queue.shift();
            
            graph[n].forEach((next)=>{
                if(!visited[next]){
                    visited[next] = true;
                    queue.push([next]);
                    dist[next] = dist[n] + 1 ;
                }
            })
            
        }
    }
    bfs();
    const max = Math.max(...dist);
    const result = dist.filter((item) => item === max);
  
    return result.length;
}
