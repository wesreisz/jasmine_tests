/*Write a function that takes a character (i.e. a string of length 1) and 
returns true if it is a vowel, false otherwise.*/
describe("", function(){
	describe("Question 3: Is a Vowel Tests", function(){
		it("Test for Vowels", function(){
			expect(isAVowel('a')).toBe(true);
			expect(isAVowel('e')).toBe(true);
			expect(isAVowel('o')).toBe(true);
			expect(isAVowel('i')).toBe(true);
			expect(isAVowel('u')).toBe(true);
			expect(isAVowel('f')).toBe(false);
			expect(isAVowel('r')).not.toBe(true);	
		})
	});
});