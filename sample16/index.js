let CustomReader = require("./customreader.js");
let CustomWriter = require("./customwriter.js");

let reader = new CustomReader();
let writer = new CustomWriter();
reader.pipe(writer);
reader.resume();