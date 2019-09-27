var chocolateBars = ["snickers", "hundred", "grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(a, b) {
  var returnArray = [b, ...a];
  return returnArray;
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  a.unshift(b);
  return a;
}

function addElementToEndOfArray(a, b) {
  var returnArray = [...a, b];
  return returnArray;
}

function destructivelyAddElementToEndOfArray(a, b) {
  a.push(b);
  return a;
}

function accessElementInArray(a, b) {
  var returnElement = a[b];
  return returnElement;
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift();
  return a;
}

function removeElementFromBeginningOfArray(a){
  var returnArray = a.slice(1);
  return returnArray;
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop();
  return a;
}

function removeElementFromEndOfArray(a) {
  var returnArray = a.slice(0, a.length - 1);
  return returnArray;
}
