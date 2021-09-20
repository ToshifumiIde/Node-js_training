const { Writable } = require("stream");

let CustomWriter = class extends Writable {
  constructor(options) {
    super(options || { decodeString: true });
  }
  _write(chunk, encoding, done) {
    let text;
    if (encoding === "buffer") {
      text = chunk.toString(this._writableState.defaultEncoding);
    } else {
      text = chunk;
    }

    try {
      console.log(text); //通常はDBなどに出力
    } catch (err) {
      done(err);
      return;
    }
    done();
  }
};

module.exports = CustomWriter;
