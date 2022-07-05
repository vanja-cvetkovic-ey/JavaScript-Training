// you can think of array as an infinitive collection where all unoccupied places are simply undefiend
// and therefore if I access the element with the index three, I'm just replacing one undefiend

//forEach()

var arr = [1, 2, 3];

arr.forEach(function (el) {
  console.log(el);
});

//back
arr.push(4); //add
arr.pop(); //remove

//front
arr.unshift("new"); //add
arr.shift();

// indexOf()
// indexOf(element) returns the index of that element
console.log(arr.indexOf(1));
arr.unshift("new");
arr[arr.indexOf("new")] = "old";
console.log(arr);

// if we want to make two arrays from one
// splice() - first argument the starting index, the second argument: number of elements including the starting one
// the method is returning new array, but it is also changing the original one.

var newArr = arr.splice(2, 2);

// slice() - with this method you are not specifying from which index and how many items, but instead from which index to which index

var arr = [1, 11, 3, 4, "qsd"];
// ********** filter()
console.log(arr.filter((el) => el > 2));
// ********** map() - creates new array modifainc elementf from the current array
console.log(
  arr.map((el) => {
    return el + "1";
  })
);
// ********** reverse() - reversing array, but unlike filter() and map() this changes the orginal arr
console.log(arr.reverse());

var additionalArr = ["some", "array", "concated"];
// ********** conact() - doesn't change the original one
// ********** join() -  join array into string - create string from the array elements
arr.concat(additionalArr);
console.log(arr);

// ********** reduce()
var numArr = [1, 2, 3, 4, 11];

console.log(
  numArr.reduce((total, value) => {
    return total + value;
  })
);

console.log(numArr);
