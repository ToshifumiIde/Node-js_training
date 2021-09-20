const fs = require("fs");
const path = require("path");
const iconv = require("iconv-lite");

// 1.非同期処理でShift-JISファイルを読み込んでコンソール表示
// fs.readFile(path.join(__dirname,"sample.txt"), (err, data)=>{
//   console.log(iconv.decode(data , "shiftjis"));
// }); //ここまで


// 2.非同期関数でShift-JISファイルを書き込み
// fs.writeFile(
//   path.join(__dirname, "output.txt"),
//   iconv.encode("こんにちは", "shiftjis"),
//   (err) => {
//     console.log("OK");
//   }
// ); //ここまで

// 3.ストリームでShift-IJSファイル読み込み
// let reader = fs.createReadStream(path.join(__dirname , "sample.txt"));
// let decoder = iconv.decodeStream("shiftjis");
// reader.pipe(decoder);
// decoder.on("data" , (chunk) =>{
//   console.log(chunk);
// });
// reader.resume();

// 4.ストリームでShift-IJSファイル書き込み
let encoder = iconv.encodeStream("shiftjis");
let writer = fs.createWriteStream(path.join(__dirname , "output2.txt"));
encoder.pipe(writer);
encoder.write("こんにちは");
encoder.end();