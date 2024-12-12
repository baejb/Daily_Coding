const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

/* <a> is acceptable.
<tv> is not acceptable. */
const vowels = ['a', 'e', 'i', 'o', 'u'];
function checkOneVowel (words) {
    let word = words.split('');
    return word.some((w) => vowels.includes(w));
}

function checkThreeVowelConsonantPattern(words) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 1; 
    let isPrevVowel = vowels.includes(words[0]); 

    for (let i = 1; i < words.length; i++) {
        let isCurrentVowel = vowels.includes(words[i]); 

        if (isCurrentVowel === isPrevVowel) {
            count++;
            if (count >= 3) return false; 
        } else {
            count = 1;
        }

        isPrevVowel = isCurrentVowel; 
    }

    return true; 
}

function checkTwoSameWordPattern (words) {
    let currentWord = words[0];
    for(let i =1 ; i< words.length; i++) {
        if(currentWord === words[i]){
            if(words[i] === 'e' || words[i] === 'o') continue;
            else{
                return false;
            }
        }else {
            currentWord = words[i];
        }
    }
    return true;
}

for(let i = 0; i< input.length-1; i++){
    let ans1 = checkOneVowel(input[i]);
    let ans2 = checkThreeVowelConsonantPattern(input[i]);
    let ans3 = checkTwoSameWordPattern(input[i]);

    if(ans1 && ans2 && ans3) console.log(`<${input[i]}> is acceptable.`);
    else console.log(`<${input[i]}> is not acceptable.`);
}