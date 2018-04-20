var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ]


function addElementToBeginningOfArray(array, element) {
// take two parameters--- array and element
// return an array and not modify the original
  newArray = [element, ...array]
  return newArray
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  // alter original array passed in
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray(array) {
// array as only argument and removes first element without mutating underlying array
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  // array as only argument and removes last element --- returns entire array and SHOULD mutate array
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  // array only argument, removes last element, returns array without last element and does NOT mutate it
  array = array.slice(0, array.length - 1)
  return array
}
