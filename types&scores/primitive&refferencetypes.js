var arr = [1, 2, 3];
var anotherArr = arr;

arr = ["a", "b"];
console.log(arr);
console.log(anotherArr);

// ['a', 'b']
//[1, 2, 3]
// this is becouse we created a new object on line 4,
// so there wasn't a change to any object
// to which this variable was pointing to, but instead it were created a new value with a new pointer
// Another arr still has the old pointer to the old value which is still there in memory - it isn't overwrited
// ! there is a big difference with editing an existing object (so both variables with the identical pointer will be updated) and assiging a new value you are actually creating new value
