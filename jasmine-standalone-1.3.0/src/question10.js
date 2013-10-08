/*
Write a function charFreq() that takes a string and builds a frequency 
listing of the characters contained in it. Represent the frequency 
listing as a Javascript object. Try it with something like 
charFreq("abbabcbdbabdbdbabababcbcbab").
*/
function StringUtil4(){
	this.charFreq = function(input){
		var result = {};
		for(var i in input){
			if(result.hasOwnProperty(input[i])){
				result[input[i]]++;
			}else{
				result[input[i]] = 1;
			}
		}
		return result;	
	};
}
