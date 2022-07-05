//closures
function generator(input) {
  var number = input;
  return function () {
    return number * 2;
  };
}

var calc = generator(990)(
  //IIFE - the reason for using iife is to make sure that you are polluting the global scope with variables
  // or maybe you might have variables in the global scope that interfere with some other variables
  // so by doing this you make sure that the variable is only available inside the local scope and not everywhere
  function calc() {
    console.log("calc");
  }
)();

// buil in methods & properties
// arguments - returns array of arguments in function
