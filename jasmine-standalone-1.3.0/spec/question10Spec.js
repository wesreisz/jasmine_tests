/*
Write a function charFreq() that takes a string and builds a frequency 
listing of the characters contained in it. Represent the frequency 
listing as a Javascript object. Try it with something like 
charFreq("abbabcbdbabdbdbabababcbcbab").
*/
describe("Question 10: Character Frequency", function(){
	it("simple test", function(){
		var stringUtil4 = new StringUtil4();
		var result = stringUtil4.charFreq("abbabcbdbabdbdbabababcbcbab");
		console.log(result);
		expect(result["a"]).toBe(7);
		expect(result['b']).toBe(14);
		expect(result['c']).toBe(3);
	});
});