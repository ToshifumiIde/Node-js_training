let http = require("http");
let url = "http://localhost:3000";
let options = { method: "GET" };
let req = http.request(url, options, (res) => {
  console.log(res); //下の書き方でもコンソールに表示可能
  // res.pipe(process.stdout);
});
req.end();
