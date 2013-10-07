/*
Write a function translate() that will translate a text into 
"rövarspråket". That is, double every consonant and place an 
occurrence of "o" in between. For example, translate("this 
is fun") should return the string "tothohisos isos fofunon".
*/
function Translator(){
	this.isAVowel = function(aCharacter){
		var vowels = ['a','e','i','o','u'];
		console.log("Character: " + aCharacter);
		for(var n=0;n<vowels.length;n++){
			if (vowels[n]===aCharacter){
				return true;
			}
		}
		return false;
	}
	this.translate = function (input){
		var result = "";
		for(var i=0;i<input.length;i++){
			if(!(this.isAVowel(input[i]) || input[i]==' ')){
				result = result + input[i] + "o" + input[i];
			}else{
				result = result + input[i];
			}
		}
		return result;
	}	
}