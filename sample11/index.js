//ファイルを同期的に読み込んで表示
let fs = require("fs");
let path = require("path");

let data = fs.readFileSync(path.join(__dirname, "./sample.txt"), "utf8");
console.log(data); //ファイルの表示
//ファイルの書き込み
// fs.writeFileSync(path.join(__dirname,"sample-copy.txt"),data, "utf8");