function solution(arr) {
    let answer = [0, 0];

    function quadTree(x, y, size) {
        let first = arr[x][y];
        let same = true;

        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (arr[i][j] !== first) {
                    same = false;
                    break;
                }
            }
            if (!same) break;
        }

        if (same) {
           
            answer[first]++;
        } else {
            
            let newSize = size / 2;
            quadTree(x, y, newSize);           
            quadTree(x, y + newSize, newSize); 
            quadTree(x + newSize, y, newSize); 
            quadTree(x + newSize, y + newSize, newSize); 
        }
    }

  
    quadTree(0, 0, arr.length);

    
    return [answer[0], answer[1]];
}
