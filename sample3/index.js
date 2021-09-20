setTimeout(() => {
  console.log("setTimeout()");
}, 100);


console.log("global");

let end = (new Date()).getTime() + 3000;
while((new Date()).getTime() < end){}