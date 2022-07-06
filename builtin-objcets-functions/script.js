setTimeout(() => {
  console.log("finished");
}, 3000);

var interval = setInterval(() => {
  console.log("ping!");
}, 1500);

setTimeout(() => {
  clearInterval(interval);
  console.log("stop");
}, 6000);

// transforming formats and values
var a = "FBB123";
var b = parseInt(a, 16);
var c = 12.12;
console.log(b);
console.log(b.toString());
console.log(c.toFixed());

// trim() cutting off extra space

// **************
//math object
var pi = Math.PI;
var e = Math.E;
var abs = Math.abs(-2);
var round = Math.round(1.34);
var ceil = Math.ceil(2.3); // round  up
var floor = Math.floor(1.9); // round down
console.log(Math.min(1, 2, 10));
console.log(Math.max(1, 2, 10));

var rnd = Math.floor(Math.round() * 100) + 1;

// **************
// date object
var today = new Date();
console.log(today);
console.log(today.toString());
// to specific date
var date = new Date(2016, 5, 26);
// var date = new Date('2016/5/26)';
console.log(date);

//amount of miliseconds since the first January in 1970
console.log(Date.parse("2016/05/20"));
// get today day in mount
console.log(today.getDate());
// get today day in week
console.log(today.getDay());

// ***********
// regular expression

var string = "ccc";
var pattern = /ab/;
console.log(pattern.exec(string));
console.log(pattern.test(string));
