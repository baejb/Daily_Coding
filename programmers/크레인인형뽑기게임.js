function solution(board, moves) {
    let answer = 0;
    let ans = [];
    moves.forEach((pos) => {
        for(let i = 0; i<board[pos-1].length; i++){
            let item = board[i][pos-1];
            if(item !== 0){
                if(ans.length > 0){
                    let top = ans.length-1;
                    if(ans[top] !== item){
                        ans.push(item);
                        board[i][pos-1] = 0;
                         break;
                    } else {
                        ans.pop();
                        board[i][pos-1] = 0;
                        answer ++ ;
                         break;
                        }
                } else {
                    ans.push(item);
                    board[i][pos-1] = 0; 
                     break;
                } 
            } 

        }
    })
   
    
    return answer * 2 ;
}
