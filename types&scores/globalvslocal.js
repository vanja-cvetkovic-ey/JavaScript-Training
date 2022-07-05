// global scope refers to our window object
// local scope is nested inside the global scope
// variables as local are kind of independed from the variables outside
// its not possible to use elements defined in local scope outside that scope

var test = "global scope";

function localScope() {
  var test = "local scope";
  console.log(test);
}

localScope();
console.log(test);
