const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 10:48

const str = input[0].split("");
const obj = {
  c: ["c=", "c-"],
  d: ["dz=", "d-"],
  l: ["lj"],
  n: ["nj"],
  s: ["s="],
  z: ["z="],
};
const map = new Map(Object.entries(obj));
let answer = 0;
let i = 0;
while (i < str.length) {
  let two = str.slice(i, i + 2).join("");
  if (map.has(str[i])) {
    if (str[i] !== "d") {
      if (map.get(str[i]).includes(two)) {
        answer++;
        i = i + 2;
        continue;
      } else {
        answer++;
      }
    } else {
      let three = str.slice(i, i + 3).join("");
      if (map.get(str[i]).includes(two)) {
        answer++;
        i = i + 2;
        continue;
      } else if (map.get(str[i]).includes(three)) {
        answer++;
        i = i + 3;
        continue;
      } else {
        answer++;
      }
    }
  } else {
    answer++;
  }
  i++;
}
console.log(answer);
