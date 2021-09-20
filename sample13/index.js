let path = require("path"); //ファイルパスの指定に必要
let fs = require("fs"); //ファイルシステムの利用に必要
let data = ""; //dataを仮置きする場所として用意。空文字を用意しないとundefinedが返却される。

let reader = fs.createReadStream(
  path.join(__dirname, "./sample13.txt"),
  "utf8"
);
reader.on("data", (chunk) => {
  data += chunk;
});
reader.on("end", () => {
  console.log(data);
});
reader.resume();
