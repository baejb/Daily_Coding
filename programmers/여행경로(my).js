function solution(tickets) {
    const answer = [];
    let graph = {};

    tickets.sort();

    tickets.forEach(([start, end]) => {
        if (!graph[start]) {
            graph[start] = [];
        }
        graph[start].push(end);
    });

    function dfs(airport) {
        const destinations = graph[airport];
        while (destinations && destinations.length > 0) {
            const nextAirport = destinations.shift();
            dfs(nextAirport);
        }
        answer.push(airport);
    }

    dfs("ICN");

    return answer.reverse();
}




