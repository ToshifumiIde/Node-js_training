module.exports = function (max = 10) {
  let data = [];
  let original =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let length = original.length;
  for (let i = 0; i <= max; i++) {
    data[i] = original[Math.floor(Math.random() * length)];
  }
  return data.join("");
  //join()メソッドは引数で指定した区切り記号文字列で区切られた各要素を指定した文字列で連結可能
  //今回の場合join("")なので、指定文字列はなし。
};
