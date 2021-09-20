//1.子から親へ
// setTimeout(() => {
//   process.send({ hello: "message from child." });
// }, 3000);

process.on("message" , (data)=>{
  console.log(data);
  process.exit(0);
});
