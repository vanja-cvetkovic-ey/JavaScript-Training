// if statments

var condition = 2;
var anotherCondition = true;

if (condition) {
  console.log("executed");
} else if (anotherCondition) {
  console.log("still executed");
} else {
  console.log("not executed");
}

console.log(2 == true);

// switch

var luckyNumber = 7;

switch (luckyNumber) {
  case 1:
    console.log("is 1");
  case 8:
    console.log("is 8");
  default:
    console.log("default");
}

// for loop

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 2; j++) {
    if (i == 1) {
      console.log("breakkkkkkkkkk");
      break;
    }
    console.log(i * j);
  }
}

// while loop

var condition = true;
var i = 3;

while (condition) {
  if (i == 3) {
    condition = false;
  }
  console.log(i);
  i++;
}

/** do {
 * console.log('executed);
 * }
 * while (condition) */
