var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function accessElementInArray(array, index) {
  return array[index];
}

function addElementToBeginningOfArray(array, element) {
  var cloned_arr = [element, ...array];
  return cloned_arr;
}

function addElementToEndOfArray(array, element) {
  var cloned_arr = [...array, element];
  return cloned_arr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function removeElementFromEndOfArray(array, element) {
  return array.slice(0, array.length - 1);
}
