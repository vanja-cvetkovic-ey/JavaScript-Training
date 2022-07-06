// window object
// width and height of window - inner is "workspace" while outer is full size
console.log(window.innerHeight);
console.log(outerHeight);
//setTimeout and setInterval are also methods avaible on window object
// local & session storage,
//window.location
// will open a new pop up with the entered adress  window.open("https://www.google.com");

// window location

// dom
document.body.children[0].style.backgroundColor = "red";
console.log(document.body.firstElementChild.firstElementChild);
console.log(document.body.firstElementChild.firstElementChild);
// selecting elements
console.log(document.getElementsByTagName("li"));
console.log(document.getElementById("simple"));
console.log(document.querySelector("li#simple"));
document.querySelector("#simple").style.color = "red";

// creating elements
var p = document.createElement("p");
p.textContent = "a new paragraph";
p.style.fontSize = "17px";

var li = document.querySelector("li");
li.appendChild(p);

var a = document.querySelectorAll("a")[0];
a.parentElement.removeChild(a);

//elemnts and nodes
// what is the difference
// all the dom things are nodes and the dom consists of nodes, it's build up of nodes and some nodes happen to be elements as well
// so all the nodes created from html elemnts.
// difference is parent node can also be some things in the dom which arent html elements

// dialogs
console.log(prompt("your name"));
