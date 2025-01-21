const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const S = fs.readFileSync(filePath).toString().trim();

let current = 1;
let index = 0;

while (index < S.length) {
  const currentStr = String(current);

  for (let i = 0; i < currentStr.length; i++) {
    if (currentStr[i] === S[index]) {
      index++;
      if (index === S.length) break;
    }
  }

  current++;
}

console.log(current - 1);
