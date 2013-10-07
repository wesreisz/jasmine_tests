/*
Write a function translate() that will translate a text into 
"rövarspråket". That is, double every consonant and place an 
occurrence of "o" in between. For example, translate("this 
is fun") should return the string "tothohisos isos fofunon".
*/
describe("Question 4: translate",function(){
	var translator = new Translator();
	it("basic translation", function(){
		expect(translator.translate("this is fun")).toBe("tothohisos isos fofunon");
	});
	it("basic translation all vowels", function(){
		expect(translator.translate("aeiou")).toBe("aeiou");
	});
	it("all consonants", function(){
		expect(translator.translate("strh")).toBe("sostotrorhoh");
	});
});
