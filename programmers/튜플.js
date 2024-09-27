function solution(s) {
    let answer = [];
    
    const obj = s.slice(2, -2)
                 .split("},{")
                 .map(x => x.split(",").map(Number));
    
    obj.sort((a, b) => a.length - b.length);
    
    const set = new Set();
    obj.forEach(arr => {
        arr.forEach(num => {
            set.add(num);
        });
    });
    
    answer = [...set];
    return answer;
}
