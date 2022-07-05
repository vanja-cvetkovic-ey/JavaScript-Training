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

function NewPerson(name, age) {
  this.name = name;
  this.age = age;
}

var max = new NewPerson("max", 27);
var ana = new NewPerson("ana", 32);

// "this" keyword - on the top level, it is referring to the global object (window object)
// - in the object it is referring to the object
// - but the general rule is that "this"  always refer to the left part of the dot which executes something where this is included

function fn(msg) {
  console.log(msg + this);
}

fn(); //this will refer to window object

// "this" won't always refers to the same thing, it is refering to whatever calls something where this is used in
// so whichever calls a function where this is used in, that is what this refer to

var obj = {
  obfn: fn,
};

var person = {
  name: "Max",
};

// KEY RULE: "this" refers to whatever calls function
// bind, call, apply
// bind, call, apply - methods which makes sure that function you call uses "this" in the right context

// bind - you can bind the this value and use it later because it's not called instantly,
// call - it si called instantly
// apply - it generally works the same as call, it also calls the function immeditely but you pass the arguments not as a comma separated list of arguments but instead, as an array,

obj.obfn.bind(person, "bind")();
obj.obfn.call(person, "call");
obj.obfn.apply(person, ["apply"]);

// creating properties with defineProperty():
Object.defineProperty(obj, "lastName", {
  value: "maxic",
  writable: true,
});

console.log(obj.lastName);

// defineProperty() is useful if you want to create a property with a more detailed confguration

// in - find out if some property excist in object
console.log("name" in person);
// for in - loop through all the fields
for (var value in person) {
  console.log(value);
}
