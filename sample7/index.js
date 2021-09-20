
console.log(process.platform);

//
// console.log(`process.cwd() : ${process.cwd()}`); 
//バッチを実行したフォルダ（実行しているコマンドプロンプトの位置）
// console.log(`__dirname : ${__dirname}`); 
//実行したファイルのディレクトリ（ファイルの存在しているディレクトリ、上と厳密には異なる）


//実行時引数の表示
// for (let i = 0; i <= process.argv.length; i++) {
//   console.log(`${i} : ${process.argv[i]}`);
// }

//実行環境の表示
// console.log(JSON.stringify(process.env, null, 2));