var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles']

function addElementToBeginningOfArray(array, element) {
  var changedArray = array
  changedArray.unshift(element)
  return changedArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var changedArray = array
  changedArray.push(element)
  return changedArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1, array.length)
}
  
  