var chocolateBars = ['snickers','hundred grand','kitkat', 'skittles'] ;

function addElementToBeginningOfArray(ray, element) {
  return [element, ...ray]
}

function destructivelyAddElementToBeginningOfArray(ray, element) {
  ray[1] = ray[0] ;
  ray[0] = element ;
  return ray
}
function addElementToEndOfArray(ray, element) {
 return [...ray, element]

}
function destructivelyAddElementToEndOfArray(ray, element) {
  ray[ray.length] = element
  return ray
}
function accessElementInArray(ray, index) {
  return ray[index]

}
function destructivelyRemoveElementFromBeginningOfArray(ray) {
  ray.shift() ;
  return ray
}
function removeElementFromBeginningOfArray(ray) {
      return ray.slice(1) ;
}
function destructivelyRemoveElementFromEndOfArray(ray) {
   ray.pop() ;
  return ray
}
function removeElementFromEndOfArray(ray) {
 return ray.slice(0, ray.length - 1) ;
}
