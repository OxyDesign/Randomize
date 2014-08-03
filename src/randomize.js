function randomize(arr){
	var newArray = [];

	for(var i = arr.length; i > 0; i--) {
		var rand = Math.round(Math.random()*(i-1));
		newArray.push(arr[rand]);
		arr.splice(rand,1);
	};
	return newArray;
};

