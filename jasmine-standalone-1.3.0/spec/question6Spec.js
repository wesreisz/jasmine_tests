/*
Define a function reverse() that computes the reversal 
of a string. For example, reverse("jag testar") should 
return the string "ratset gaj".
*/
describe("Question 6: StringUtil Reversal", function(){
	var stringUtils = new StringUtils();
	it("simple test", function(){
		expect(stringUtils.reverse("jag testar")).toBe("ratset gaj");
		expect(stringUtils.reverse("ratset gaj")).toBe("jag testar");
	});
});