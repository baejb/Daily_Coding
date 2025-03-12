const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let i = 0;
let validCase = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

while (i < input.length - 1) {
  console.log(solution(input[i].split("")) ? "valid" : "invalid");
  i++;
}

function solution(game) {
  let Xcnt = 0;
  let Ocnt = 0;
  let space = 0;
  let Xpos = [];
  let Opos = [];

  game.forEach((x, index) => {
    if (x === "X") {
      Xcnt++;
      Xpos.push(index + 1);
    } else if (x === "O") {
      Ocnt++;
      Opos.push(index + 1);
    } else {
      space++;
    }
  });

  if (Ocnt > Xcnt) return false;
  if (Xcnt - Ocnt > 1) return false;

  let Xwin = validCase.some((x) => x.every((v) => Xpos.includes(v)));
  let Owin = validCase.some((x) => x.every((v) => Opos.includes(v)));

  if (Owin && Ocnt !== Xcnt) return false;

  if (Xwin && Xcnt !== Ocnt + 1) return false;

  if (Owin && Xwin) return false;

  if (!Owin && !Xwin && space === 0) return true;

  return Owin || Xwin;
}
