/*
Write a function charFreq() that takes a string and builds a frequency 
listing of the characters contained in it. Represent the frequency 
listing as a Javascript object. Try it with something like 
charFreq("abbabcbdbabdbdbabababcbcbab").
*/
function StringUtil4(){
	this.charFreq = function(input){
		var result = {};
		result.contains = function(element){
			if(result.hasOwnProperty(element)){
				return true;
			}else{
				return false;
			}
		};
		for(var i in input){
			if(result.contains(input[i])){
				result[input[i]]++;
			}else{
				result[input[i]] = 1;
			}
		}
		return result;	
	};
}
