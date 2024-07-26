const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [A, B, C] = input[0].split(" ").map(BigInt);

function modExp(A, B, C) {

    if (B === BigInt(0)) {
        return BigInt(1);
    }
    

    let half = modExp(A, B / BigInt(2), C);
    
    if (B % BigInt(2) === BigInt(0)) {
        return (half * half) % C;
    } else {
        return (A * half * half) % C;
    }
}

console.log(modExp(A, B, C).toString());
