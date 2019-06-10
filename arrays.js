var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = [1]

function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array]
  return newArray
}

var array = [1]

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

var array = [1]

function addElementToEndOfArray(array, newItem) {
  newArray = [...array, newItem]
  return newArray
}

var array = [1]

function destructivelyAddElementToEndOfArray(array, newItem) {
  array.push(newItem)
  return array
}

var array = [1, 2, 3, 4, 5]

function accessElementInArray(array, index) {
  return array[index]
}

var array = [1, 2, 3]

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

var array = [1, 2, 3, 4, 5]

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}

var array = [1, 2, 3, 4, 5]

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

var array = [1, 2, 3]

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1)
  return array
}