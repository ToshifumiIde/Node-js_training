//任意の文字列をテキストファイル出力する
// let path = require("path");
// let fs = require("fs");

// let writer = fs.createWriteStream(path.join(__dirname, "created.txt"), "utf8");
// writer.end("Hello World!");

//読みこんだファイルをパイプして出力する
let path = require("path");
let fs = require("fs");

let reader = fs.createReadStream(path.join(__dirname, "sample14.txt") , "utf8");
let writer = fs.createWriteStream(path.join(__dirname, "export.txt") , "utf8");
reader.pipe(writer);
reader.resume();