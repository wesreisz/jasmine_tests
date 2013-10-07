/*
Define a function sum() and a function multiply() 
that sums and multiplies (respectively) all the 
numbers in an array of numbers. For example, 
sum([1,2,3,4]) should return 10, and 
multiply([1,2,3,4]) should return 24.
*/
function Calculator(){
	this.sum=function(val){
		var result = 0;
		for(var i=0;i<val.length;i++){
			if(typeof val[i] == 'number'){
				result += val[i];
			}
		}
		return result;
	};
	this.multiply=function(val){
		var result=0;
		for(var i=0;i<val.length;i++){
			if(typeof val[i] == 'number'){
				if(i==0){
					result = val[i];
				}else{
					result = result * val[i];
				}
			}
		}
		return result;
	};
}