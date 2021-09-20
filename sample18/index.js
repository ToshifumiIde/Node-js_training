//hello worldを返すサーバーを作成

let http = require("http");
let server = http.createServer((req , res)=>{
  res.end("Hello World");
});
server.listen(3000);