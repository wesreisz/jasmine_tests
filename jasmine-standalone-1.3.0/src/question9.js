/*
Write a function filterLongWords() that takes an 
array of words and an integer i and returns the 
array of words that are longer than i.
*/
function StringUtils3(){
	this.filterLongWords = function(args, length2FilterOn){
		var result=[];
		for(var i in args){
			var arg = args[i];
			if(arg.length>length2FilterOn){
				result.push(arg)
			}
		}
		return result;
	}
} 