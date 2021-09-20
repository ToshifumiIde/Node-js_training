//functionを用いたクラス作成
let util = require("util");
var Car = function(name){
  this.name = name;
};
Car.prototype.drive = function(){
  console.log("zoom zoom ...");//functionを用いたクラスの場合、メソッドはprototypeに格納
};

var Lamborghini = function (name){
  Lamborghini.super_.call(this,name);
  console.log(`{fire ${name}}`);
}
util.inherits(Lamborghini , Car); //小クラスへ親クラスを継承

Lamborghini.prototype.echo = function(){
  Lamborghini.super_.prototype.drive.call(this);
};
Lamborghini.prototype.drive = function(){
  console.log(`fire ${this.name}`);
}

let car = new Lamborghini("lamborghini");

car.echo();
car.drive();


//classを用いたクラス作成
// var Car = class {
//   constructor(name) {
//     this.name = name;
//   }

//   drive() {
//     console.log("zoom zoom ...");
//   }
// };
// var Lamborghini = class extends Car {
//   constructor(name) {
//     super(name);
//   }
//   echo() {
//     super.drive();
//   }
//   drive() {
//     console.log(`fire ${this.name}`);
//   }
// };
// var car = new Lamborghini("lamborghini");
// car.echo();
// car.drive();