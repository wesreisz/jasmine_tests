/*
Represent a small bilingual lexicon as a Javascript object 
in the following fashion {"merry":"god", "christmas":"jul", 
"and":"och", "happy":gott", "new":"nytt", "year":"år"} and
use it to translate your Christmas cards from English 
into Swedish.
*/
describe("Question 7: Swedish Chistmas", function(){
	var swedishChristmas = new SwedishChristmas();
	it("Happy New Year", function(){
		expect(swedishChristmas.translate("happy new year")).toBe("gott nytt år");
	});
	it("Merry Christmas", function(){
		expect(swedishChristmas.translate("Merry Christmas")).toBe("god jul");
	});
	it("Merry Christmas and Happy new Year", function(){
		expect(swedishChristmas.translate("Merry Christmas and a Happy new Year")).toBe("god jul och undefined gott nytt år");
	});
})