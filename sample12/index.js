// 1.ファイルの読み込み（sample12.txt）
// let path = require("path");
// let fs = require("fs");

// fs.readFile(path.join(__dirname, "sample12.txt"), "utf8", (err, data) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log(data);
// });


// 2.ファイルの書き込み
// let path = require("path");
// let fs = require("fs");

// fs.readFile(path.join(__dirname, "sample12.txt"), "utf8", (err, data) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }

//   fs.writeFile(path.join(__dirname, "sample-copy.txt"), data, "utf8", (err) => {
//     if (err) {
//       console.log(err.message);
//       return;
//     }

//     console.log("OK");
//   });
// });


// // 3.2.で作成したプログラムをPromise化してネストを削除
// let path = require("path");
// let fs = require("fs");
// let util = require("util"); //utilの取得
// //read・writeファイルのPromise化
// let readFile = util.promisify(fs.readFile);
// let writeFile = util.promisify(fs.writeFile);
// //Promise化したものの実行（Promise化したため、第三引数のcallback関数は不要となる）
// readFile(path.join(__dirname , "sample12.txt") , "utf8")
//   .then((data)=>{
//     return writeFile(path.join(__dirname , "sample-copy2.txt") , data ,"utf8");
//   })
//   .then(()=>{
//     console.log("ok");
//   })
//   .catch((err)=>{
//     console.log(err.message);
//   });

let path = require("path");
let fs = require("fs");
let util = require("util");

let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

(async function (){
  try{
    let data = await readFile(path.join(__dirname,"sample12.txt") , "utf8");
    await writeFile(path.join(__dirname , "sample-copy3.txt") , data , "utf8");
    console.log("ok");
  }catch(err){
    console.log(err.message);
  }
})();