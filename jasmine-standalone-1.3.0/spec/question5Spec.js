/*
Define a function sum() and a function multiply() 
that sums and multiplies (respectively) all the 
numbers in an array of numbers. For example, 
sum([1,2,3,4]) should return 10, and 
multiply([1,2,3,4]) should return 24.
*/
describe("Question 5: calculator sum", function(){
	var calculator = new Calculator();
	it("simple sum test 1", function(){
		expect(calculator.sum([2,3])).toBe(5);
	});
	it("simple sum test 2", function(){
		expect(calculator.sum([2,3,,])).toBe(5);
	});
	it("simple sum test 3", function(){
		expect(calculator.sum([2,3,0,])).toBe(5);
	});
	it("simple sum test 4", function(){
		expect(calculator.sum([2,3,-1,])).toBe(4);
	});
	it("simple sum test 5", function(){
		expect(calculator.sum([2,"3",-1,])).toBe(1);
	});
});