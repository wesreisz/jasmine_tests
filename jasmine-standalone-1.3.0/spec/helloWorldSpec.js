describe("sayHello", function(){
	it("hiya jasmine", function(){
		expect(sayHello()).toEqual("Hello Jasmine, you look lovely today.");
	});
	it("jasmine", function(){
		expect(sayHello()).toContain("Jasmine");
	});
});