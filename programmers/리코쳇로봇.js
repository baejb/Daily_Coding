function solution(board) {
    const rows = board.length;
    const cols = board[0].length;
    const directions = [
        [-1, 0], 
        [1, 0],  
        [0, -1],
        [0, 1]   
    ];
    
    let start = null;
    let finish = null;

    // 시작점과 도착점 찾기
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'R') start = [i, j];
            if (board[i][j] === 'G') finish = [i, j];
        }
    }

    const isValid = (x, y) => x >= 0 && x < rows && y >= 0 && y < cols;
    const findEdge = (x, y, dx, dy) => {
        while (isValid(x + dx, y + dy) && board[x + dx][y + dy] !== 'D') {
            x += dx;
            y += dy;
        }
        return [x, y];
    };

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const queue = [[...start, 0]]; // [x, y, count]
    visited[start[0]][start[1]] = true;

    while (queue.length) {
        const [x, y, count] = queue.shift();

        if (x === finish[0] && y === finish[1]) return count;

        for (const [dx, dy] of directions) {
            const [nx, ny] = findEdge(x, y, dx, dy);

            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, count + 1]);
            }
        }
    }

    return -1; 
}
