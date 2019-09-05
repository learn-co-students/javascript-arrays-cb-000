var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, elem) {
  var new_array = [elem, ...arr]
  return new_array
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem)
  return arr
}


function addElementToEndOfArray(arr, elem) {
  var new_array = [...arr, elem]
  return new_array
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  arr.push(elem)
  return arr
}

function accessElementInArray(arr, idx) {
  return arr[idx]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  var new_array = arr.slice(1)
  return new_array
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  var new_array = arr.slice(0,-1)
  return new_array
}
