/*
Write a function findLongestWord() that takes an array of 
words and returns the length of the longest one.
*/
describe("Question 8: Longest Word", function(){
	var names = ["wesley", "kim", "justin", "leanne", "tyler"];
	var stringUtils = new StringUtils2();
	
	it("simple test 1", function(){
		expect(stringUtils.findLongest(names)).toBe("wesley");
	});
	var names1 = ["tyler"];
	it("simple test 2", function(){
		expect(stringUtils.findLongest(names)).toBe("wesley");
	});
});