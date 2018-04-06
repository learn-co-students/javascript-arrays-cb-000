// arrays chocolateBars is an array containing "snickers", "hundred grand", "kitkat", and "skittles"
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

/*
- Most modern browsers support what is called the `spread operator`
— it's three dots in a row: (...)
- when used with an array, it spreads out the array's contents
- use the spread operator to create a new array in place, rather than modifying the original one

  - ADDING TO THE BEGINNING OF THE ARRAY:
  var cities = ["New York", "San Francisco"]

  ["Philadelphia", ...cities] //=> ["Philadelphia", "New York", "San Francisco"]

  cities //=> ["New York", "San Francisco"] (cities array remains untouched using spread operator)


  - ADDING TO THE END OF THE ARRAY:
  var cities = ["New York", "San Francisco"]

  [...cities, "Philadelphia"] //=> ["New York", "San Francisco", "Philadelphia"]

  cities //=> ["New York", "San Francisco"] (cities array remains untouched using spread operator)
*/

// arrays addElementToBeginningOfArray(array, element) adds an element to the beginning of an array
// arrays addElementToBeginningOfArray(array, element) does not alter the original array
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

// arrays destructivelyAddElementToBeginningOfArray(array, element) adds an element to the beginning of an array
// arrays destructivelyAddElementToBeginningOfArray(array, element) alters the original array
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

// arrays addElementToEndOfArray(array, element) adds an element to the end of an array
// arrays addElementToEndOfArray(array, element) does not alter the original array
function addElementToEndOfArray(array, element) {
  return [...array, element];
}

// arrays destructivelyAddElementToEndOfArray(array, element) adds an element to the end of an array
// arrays destructivelyAddElementToEndOfArray(array, element) alters the original array
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

// arrays accessElementInArray(array, index) accesses the element in array at the given index
function accessElementInArray(array, index) {
  return array[index];
}

// arrays destructivelyRemoveElementFromBeginningOfArray(array) returns the array with the first element removed
// arrays destructivelyRemoveElementFromBeginningOfArray(array) alters the original array
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

/*
- there is also a way to remove the first element from an array without changing the underlying array; using the `slice` method
- `slice` does just what its name implies: it takes a slice from its array
- the first argument specifies where the slice starts, and the second argument specifies where it ends
- if there is no second argument, the slice goes from the first argument (the start) to the end of the array
- to remove the first element from an array, use `slice(1)`
- `slice` is also handy if we know we want the last `n` elements of an array: simply pass it an negative index
- to remove the last element element from an array, use `slice(-1)`
*/

// arrays removeElementFromBeginningOfArray(array) removes the first element from the array
// arrays removeElementFromBeginningOfArray(array) does not alter the original array
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

// arrays destructivelyRemoveElementFromEndOfArray(array) returns the array with the last element removed
// arrays destructivelyRemoveElementFromEndOfArray(array) alters the original array
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

// arrays removeElementFromEndOfArray(array) removes the last element from the array
// arrays removeElementFromEndOfArray(array) does not alter the original array
// slice from index 0 (first element in the array) to the last element in the array (array.length - 1)
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
