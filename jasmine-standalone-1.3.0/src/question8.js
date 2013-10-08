/*
Write a function findLongestWord() that takes an array of 
words and returns the length of the longest one.
*/
function StringUtils2(){
	this.findLongest = function(args){
		if(args.length<=1){
			return args;
		}
		var longest = "";
		for(var i in args){
			if (args[i].length>longest.length){
				longest = args[i];
			}
		}
		return longest;
	}
}