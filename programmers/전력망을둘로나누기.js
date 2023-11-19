function solution(n, wires) {
    const graph = new Array(n + 1).fill(null).map(() => []);
    const visited = new Array(n + 1).fill(false);  // 전역으로 선언

    // 그래프 생성
    wires.forEach(([v1, v2]) => {
        graph[v1].push(v2);
        graph[v2].push(v1);
    });

    function dfs(node) {
        let count = 1;
        visited[node] = true;

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                count += dfs(neighbor);
            }
        }

        return count;
    }

    let result = Infinity;

    wires.forEach(([v1, v2]) => {
        // 간선을 끊어서 두 서브 그래프로 나누기
        graph[v1] = graph[v1].filter(neighbor => neighbor !== v2);
        graph[v2] = graph[v2].filter(neighbor => neighbor !== v1);

        // 각 서브 그래프의 크기 계산
        visited.fill(false);
        const count1 = dfs(v1);
        const count2 = n - count1;

        // 두 서브 그래프의 크기 차이 갱신
        result = Math.min(result, Math.abs(count1 - count2));

        // 간선을 원래대로 복원
        graph[v1].push(v2);
        graph[v2].push(v1);
    });

    return result;
}


