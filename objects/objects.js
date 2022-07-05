// new Object() - object constructor
// Objcect.create(prototype)  => when you need to set the prototype on your own
// prototypes allow you to have a prototype of an object and then creates objects of that prototype
// and if that prototype has a certain function, all the objects based on that prototype would have that function too

// the default object prototype is Object.prototype which is the root prototype of all objects here

var age = 30;
var person = {
  name: "Max",
  age: 27,
};

Object.prototype.greet = function () {
  console.log("hello. i am " + this.name);
};

var max = Object.create(person);
var ana = Object.create(person);
ana.name = "anna";

max.greet();
ana.greet();

console.log(ana.__proto__ == person);
