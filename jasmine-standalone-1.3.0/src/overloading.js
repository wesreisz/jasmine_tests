/*
 Notes:
 After doing exercise 1 and 2, I attempted to use
 operator overloading, and it the tests fail. So
 I did the simplist thing that works and changed
 the method name. That lead me to look at overloading
 in javascript. John Resig posted a method of using
 overloading in javascript. This class takes the 
 two operations from exercises 1 and 2 and applies
 Resig's overloading technique.
 References: 
 - http://ejohn.org/blog/javascript-method-overloading/ 
*/
// addMethod - By John Resig (MIT Licensed)
function addMethod(object, name, fn){
	var old = object[name];
	object[name] = function(){
		if(fn.length==arguments.length){
			return fn.apply(this,arguments);
		}else if(typeof old=='function'){
			return old.apply(this,arguments);
		}
	};
}
function Comparator(){
	addMethod(this, "max", function(first, second){
		if(isNaN(first) || isNaN(second)){
			throw "Invalid Parameter";
		}

		if(first>second){
			return first;
		}else{
			return second;
		}
	});
	addMethod(this, "max", function(first, second, third){
		if(isNaN(first) || isNaN(second) || isNaN(third)){
			throw "Invalid Parameter";
		}
		
		var result = first;
		if (second>result){
			result = second;
		}
		if(third>result){
			result = third;
		}
		return result;
	});
}