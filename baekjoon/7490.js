const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]); // 테스트 케이스
for (let i = 1; i <= N; i++) {
  let result = [];
  let limit = input[i];
  recursive(2, "1", limit, result);

  const answer = result.filter((item) => {
    let exp = item.replace(/ /g, "");
    return eval(exp) === 0;
  });
  answer.sort();
  answer.forEach((x) => {
    console.log(x);
  });
  console.log("");
}

function recursive(num, now, limit, result) {
  if (num > limit) {
    result.push(now);
    return;
  }

  recursive(num + 1, now + "+" + num, limit, result);
  recursive(num + 1, now + "-" + num, limit, result);
  recursive(num + 1, now + " " + num, limit, result);
}
