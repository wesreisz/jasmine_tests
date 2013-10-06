/*
Ten Simple Javascript Exercises
http://www.ling.gu.se/~lager/kurser/webtechnology/lab4.html
*/
describe("Ten Simple Javascript Exercises", function(){
	/*
	Define a function max() that takes two numbers as arguments and returns the 
	largest of them. Use the if-then-else construct available in Javascript.
	-add a test that catches an exception if a number isn't past in
	-interesting note... calling max with three paramters  does not error,
	 but fails. Checking length on arguments is valid, but slows your alogorithm
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
			expect(function() {
			    max(12,"A string");
			}).toThrow("Invalid Parameter");
		});
	});
	/*
	Define a function maxOfThree() that takes three numbers as arguments and 
	returns the largest of them.
	*/
	describe("Question 2: Max of Three Test", function(){
		it("max of three test 1, simple", function(){
			expect(maxOfThree(5,8,10)).toBe(10);
			expect(maxOfThree(5,8,10)).not.toBe(8);
		});
	});
	/*
	Implement a class that demonstrates operator overloading.
	*/
	describe("Question 2a: Operator Overloading", function(){
		var comparator = new Comparator();
		it("call into overloaded object", function(){
			expect(comparator.max(12,14)).toBe(14);
			expect(comparator.max(12,-14)).toBe(12);
			expect(comparator.max(0,-14)).toBe(0);
			expect(comparator.max(12,0)).toBe(12);
			
			expect(comparator.max(12,14,5)).toBe(14);
			expect(comparator.max(12,-14,45)).toBe(45);
			expect(comparator.max(0,-14,-45)).toBe(0);
			expect(comparator.max(12,0,23)).toBe(23);
		});
		it("invalid parameters test", function(){
			expect(function() {
		   		comparator.max("A string",12);
			}).toThrow("Invalid Parameter");
			expect(function() {
			    comparator.max(5,"a string");
			}).toThrow("Invalid Parameter");
			expect(function() {
			   	comparator.max("A string",12,45);
			}).toThrow("Invalid Parameter");
			expect(function() {
		    	comparator.max(12,"A string",45);
			}).toThrow("Invalid Parameter");
			expect(function() {
		    	comparator.max(12,45,"A string");
			}).toThrow("Invalid Parameter");
		});
	});
});