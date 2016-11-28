var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var element = ["foo", ...array];
  return element;
}

function destructivelyAddElementToBeginningOfArray(array, element){
 var element = 'foo';
 array.unshift(element);
 return array;
}

function addElementToEndOfArray(array, element){
  var element = [...array, "foo"];
  return element;
}

function destructivelyAddElementToEndOfArray(array, element){
  var element = 'foo';
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  var index = array[2];
  return index;
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1);
  return array;
}

function removeElementFromEndOfArray(array){
  var removed = array.slice(0, array.length -1);
  return removed;

}
