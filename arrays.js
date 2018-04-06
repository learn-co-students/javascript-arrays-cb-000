// arrays chocolateBars is an array containing "snickers", "hundred grand", "kitkat", and "skittles"
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

/*
- Most modern browsers support what is called the spread operator
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
