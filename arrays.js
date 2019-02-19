var chocolateBars = ['snickers','hundred grand','kitkat', 'skittles'] ;

function addElementToBeginningOfArray(ray, element) {
<<<<<<< HEAD
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
=======
  ray.unshift(element)
}

destructivelyAddElementToBeginningOfArray(ray, element) {
  return ray[0] = element
}
function addElementToEndOfArray(ray, element) {
  ray.push(element)
}
function destructivelyAddElementToEndOfArray(ray, element) {
  ray[-1] = element
>>>>>>> a584f53379270f4ce142ce785b8c3686d9f97bc8
  return ray
}
function accessElementInArray(ray, index) {
  return ray[index]

}
function destructivelyRemoveElementFromBeginningOfArray(ray) {
<<<<<<< HEAD
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
=======
  ray.shift()
  return ray
}
function removeElementFromBeginningOfArray(ray) {
  return ray.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(ray) {
  return ray.pop()
}
function removeElementFromEndOfArray(ray) {
  return ray.slice(0, ray.length - 1)
>>>>>>> a584f53379270f4ce142ce785b8c3686d9f97bc8
}
