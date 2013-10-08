/*
Write a function filterLongWords() that takes an 
array of words and an integer i and returns the 
array of words that are longer than i.
*/
describe("Question 9: filterLongWords",function(){
	it("simple filter test", function(){
		var insects = ["mosquitoes", "flea", "butterfly"]
		var stringUtils3 = new StringUtils3();
		expect(stringUtils3.filterLongWords(insects, 9)).toContain("mosquitoes");
		expect(stringUtils3.filterLongWords(insects, 3)).toContain("flea");	
	})
});