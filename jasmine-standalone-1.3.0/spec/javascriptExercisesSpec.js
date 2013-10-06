/*
Ten Simple Javascript Exercises
http://www.ling.gu.se/~lager/kurser/webtechnology/lab4.html
*/
describe("Ten Simple Javascript Exercises", function(){
	/*
	Define a function max() that takes two numbers as arguments and returns the 
	largest of them. Use the if-then-else construct available in Javascript.
	-add a test that catches an exception if a number isn't past in
	*/
	describe("Question 1: Max Test", function(){
		it("max test 1, simple", function(){
			expect(max(32,12)).toBe(32);
		});
		it("max test 2, inverse", function(){
			expect(max(-32,12)).toBe(12);
		});
		it("max test 3, invalid parameters", function(){
			expect(function() {
			    max("A string",12);
			}).toThrow("Invalid Parameter");
		});
	});
});