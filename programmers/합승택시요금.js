function solution(n, s, a, b, fares) {
    var answer = 0;
    let graph = {};
    fares.forEach((x) => {
        let [s, e ,p ] = x;
        if(!graph[s]) graph[s] = [];
        if(!graph[e]) graph[e] = [];
        graph[s].push([e,p]);
        graph[e].push([s,p]);
    })

    function dijkstra(start){
        let distances = Array(n+1).fill(Infinity);
        distances[start] = 0;
        let queue = [[start,0]];
        while(queue.length){
            let [start , price] = queue.shift();
          
            for(let next of graph[start]){
                let [s , np] = next;
                if(price + np < distances[s]){
                    distances[s] = price+np;
                    queue.push([s , price+np])
                }
            }
            queue.sort((a,b) => a[1]-b[1]);
        }
        return distances; 
    }
    
    const fromStart = dijkstra(s);

  
    const fromA = dijkstra(a);

   
    const fromB = dijkstra(b);
    let minCost = Infinity;
    for (let i = 1; i <= n; i++) {
        
        const totalCost = fromStart[i] + fromA[i] + fromB[i];
        minCost = Math.min(minCost, totalCost);
    }

    return minCost;
}
