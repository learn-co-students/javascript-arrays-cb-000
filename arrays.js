var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (array, element)  {
  var new_array = [element, ...array];
  return new_array;
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element);
  return array;
}

var addElementToEndOfArray = (array, element) => {
  var new_array = [...array, element];
  return new_array;
}

var destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element);
  return array;
}

var accessElementInArray = (array, index) => {
  return array[index];
  return array;
}

var destructivelyRemoveElementFromBeginningOfArray = (array) => {
  array.shift();
  return array;
}

var removeElementFromBeginningOfArray = (array) => {
  array.shift();
  return array;
}

var removeElementFromEndOfArray = (array) => {
  array.pop();
  return array
}
