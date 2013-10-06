function max(first, second){
	if(isNaN(first)){
		throw "Invalid Parameter";
	}
	
	if(first>second){
		return first;
	}else{
		return second;
	}

}