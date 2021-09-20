let http = require("http");
let data = "Hello World";
let url = "http://localhost:3000";
let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": Buffer.byteLength(data),
  },
};
let req = http.request(url, options, (res) => {
  res.pipe(process.stdout);
});
req.on("error", (err) => {
  console.log(err.message);
});
req.end(data);
