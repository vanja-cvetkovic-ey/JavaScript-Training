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

// with new keyword we are "constructing" a new object using the constructor function
// javascript automaticly gives us a prototype for each of our functions here or of our objects created of this constructor function

function Person() {}

var person = new Person();
person.name = "Max";

console.log(person.__proto__ == Person.prototype);

// so that is a certain prototype automatically created for us here which we can use

Person.prototype.greet = function () {
  console.log("hello");
};

// constructor functions let us creates objects with some default fields and values if you want to put like it this
// prototypes let allow us to inherite from objects, so ey are on different levels

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var max = new Person("max", 27);
var ana = new Person("ana", 32);
