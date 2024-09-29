function solution(phone_book) {
    let answer = true;
    phone_book.sort();
    let target = phone_book[0];
    for(let i = 1; i<phone_book.length;i++){
        if(target === phone_book[i].slice(0,target.length)){
            answer = false;
        } else {
            target = phone_book[i];
        }
    }
    
   
    return answer;
}
