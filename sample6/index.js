function numFactory(){
  let sum = 0;
  function updateNum(){
    console.time("time1");
    for (let i = 1; i <=1000; i++){
      sum += i;
    }
  }
  return updateNum;
}

let fnNumber = numFactory();

fnNumber();
console.timeEnd("time1");

