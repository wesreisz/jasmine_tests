/*
Define a function reverse() that computes the reversal 
of a string. For example, reverse("jag testar") should 
return the string "ratset gaj".
*/
function StringUtils(){
	this.reverse = function(input){
		var result = "";
		for(var i = input.length-1;i>=0;i--){
			result+=input[i];
		}
		return result;
	};
}