// let randomstring = require("./randomstring.js");
// // let path = require("path");
// // let fs = require("fs");

// console.log(randomstring());

let CustomReader = require("./customreader.js");
let reader = new CustomReader();
reader.on("data", (chunk) => {
  console.log(chunk);
});
reader.resume();
