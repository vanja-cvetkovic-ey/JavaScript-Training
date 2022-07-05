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
