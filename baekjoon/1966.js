const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  let [N, M] = input[i * 2 - 1].split(" ").map(Number);
  let arr = input[i * 2].split(" ").map(Number);

  let queue = arr.map((p, idx) => {
    return {
      idx,
      p,
    };
  });
  let sorted = arr.sort((a, b) => b - a);
  let count = 0;
  while (queue.length) {
    let cur = queue.shift();

    if (cur.p === sorted[0]) {
      count++;
      sorted.shift();
      if (cur.idx === M) {
        console.log(count);
        break;
      }
    } else {
      queue.push(cur);
    }
  }
}
