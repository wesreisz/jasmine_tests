/*
Represent a small bilingual lexicon as a Javascript object 
in the following fashion {"merry":"god", "christmas":"jul", 
"and":"och", "happy":gott", "new":"nytt", "year":"år"} and
use it to translate your Christmas cards from English 
into Swedish.
*/
function SwedishChristmas(){
	var dictionary = {
		"merry":"god", 
		"christmas":"jul", 
		"and":"och", 
		"happy":"gott", 
		"new":"nytt", 
		"year":"år"
	};
	this.translate = function(phrase){
		var words2translate = phrase.trim().split(' ');
		var result = "";
		for(var i=0;i<words2translate.length;i++){
			console.log(words2translate[i] + ":" + dictionary[words2translate[i].toLowerCase()]);
			var translatedWord = dictionary[words2translate[i].toLowerCase()];
			result += translatedWord + " ";
		}
		return result.trim();
	};
}