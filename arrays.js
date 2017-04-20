var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array,element){
  arr=[element, ...array];
  return arr;
}
function addElementToEndOfArray(array,element){
  array[array.length]=element;
  return array;
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array;
}

function accessElementInArray(array,index){
  return array[index]
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromEndOfArray(array){
  arr = array.slice(0,array.length-1)
  return arr;
}
function removeElementFromBeginningOfArray(array){
  arr = array.slice(1,array.length)
  return arr;
}
