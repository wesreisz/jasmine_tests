function isAVowel(aCharacter){
	var vowels = ['a','e','i','o','u'];
	//console.log("Character: " + aCharacter);
	for(var n=0;n<vowels.length;n++){
		if (vowels[n]===aCharacter){
			return true;
		}
	}
	return false;
}