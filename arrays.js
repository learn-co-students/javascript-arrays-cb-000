var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = (arr, el) => {
  return [el, ...arr];
};

var destructivelyAddElementToBeginningOfArray = (arr, el) => {
  arr.unshift(el);
  return arr;
};

var addElementToEndOfArray = (arr, el) => {
  return [...arr, el];
};

var destructivelyAddElementToEndOfArray = (arr, el) => {
  arr.push(el);
  return arr;
};

var accessElementInArray = (arr, index) => {
  return arr[index];
};

var destructivelyRemoveElementFromBeginningOfArray = array => {
  array.shift();
  return array;
};

var removeElementFromBeginningOfArray = array => {
  return array.slice(1);
};

var destructivelyRemoveElementFromEndOfArray = array => {
  array.pop();
  return array;
};

var removeElementFromEndOfArray = array => {
  return array.slice(0, array.length - 1);
};
