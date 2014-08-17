function randomize(arr,reset){
	var cloneArray = arr.slice(0), // avoid altering the original array (arr)
		newArray = [];

	for(var i = cloneArray.length; i > 0; i--) {
		var rand = Math.round(Math.random()*(i-1));
		newArray.push(cloneArray[rand]);
		cloneArray.splice(rand,1);
	};

	// if reset is true : assign the new array (newArray) to the original array (arr)
	if(reset) arr = newArray;
	return newArray;
};

