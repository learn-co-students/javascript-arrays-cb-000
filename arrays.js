var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, el){
	return newArray = [el,...array];

}


function destructivelyAddElementToBeginningOfArray(array, element){
	array.unshift(element);
	return array;
	 
}

function addElementToEndOfArray(array, element){
     return newArray = [...array, element];

}

function destructivelyAddElementToEndOfArray(array, element){
	array.push(element);
	return array;
}

function removeElementFromBeginningOfArray(array){
	array.splice(0,1);
	return array;
}

function removeElementFromEndOfArray(array){
	array.pop();
	return array;
}

function accessElementInArray(array, index){
	var foundIt = array.splice(index,index);
	return Number(foundIt.join(""));
}