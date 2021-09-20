//リクエスト情報をもと、以下のアクセス情報をコンソールに出力
// - 日時
// - メソッド
// - URL
// - User-Agent


let http = require("http");
let server = http.createServer((req , res) =>{
  console.log(
    `[${(new Date()).toISOString()}]` +
    `${req.method} ${req.url}` +
    `${req.headers["user-agent"]}`
  );
  res.end("Hello world");
});
server.listen(3000);