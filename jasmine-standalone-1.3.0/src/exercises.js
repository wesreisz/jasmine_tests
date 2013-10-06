function max(first, second){
	if(isNaN(first) || isNaN(second)){
		throw "Invalid Parameter";
	}
	
	if(first>second){
		return first;
	}else{
		return second;
	}
}

function maxOfThree(first,second,third){
	if(isNaN(first) || isNaN(second) || isNaN(third)){
		throw "Invalid Parameter";
	}
	
	var result = first;
	if (second>result){
		result = second;
	}
	if(third>result){
		result = third;
	}
	return result;
}