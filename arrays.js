function addElementToBeginningOfArray(arr, elt){
  //add an elt to the beginning of the array
  //return a new array with the elt added
  // use the ... function
  return [elt, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, elt)
{
  //add elt to the array -- modifying the array content
  //return the array
  arr.unshift( elt );
  return arr;
}

function addElementToEndOfArray(arr, elt){
  //do NOT alter the original array
  //add the elt to the end of the array
  return [...arr, elt]

}

function destructivelyAddElementToEndOfArray (arr, elt)
{
  //alter the original array
  //push - add elt to end of array - destructively
  arr.push(elt);
  return arr;
}
function accessElementInArray(arr, idx)
{
  return arr[idx];  //returns elt at that index
}

function destructivelyRemoveElementFromBeginningOfArray(arr)
{
  //takes an array as only argument
  //removes the first element
  //return the entire array : mutated
  // use slice method slice(elt#) where 1 = first elt of array :
  arr.shift();
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  return arr.slice(0, arr.length-1)
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
