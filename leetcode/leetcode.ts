// ### Exercise 1: Reverse a String

// - [ ]  Exercise 1: Reverse a String

// **Objective**: Write a function that takes a string as input and returns the string reversed.

// ### Description:

// - You are given an input string.
// - Your task is to write a function that reverses this string.
// - The solution should handle strings of any length, including empty strings.
// - Focus on writing clean, efficient code.

// ### Example:

// - Input: `"hello"`
// - Output: `"olleh"`

// ### Hints:

// 1. Think about how you can iterate over the string. Do you start from the beginning or the end?
// 2. Consider using a loop or string manipulation methods.
// 3. Remember edge cases, such as an empty string.

// ### Bonus Challenge:

// - Try to solve this problem without using built-in reverse functions.

function reverse(string:string){
    const arr: string[] = string.split("");
    const reversedArr: string[] = arr.toReversed();
    const reversedString : string =  reversedArr.join("");
    return reversedString;
};


function reverseNoBuiltIn(string:string){
    const arr: string[] = []; /* c */
    for(let i = string.length - 1; i >= 0; i-- ){ /* n */
        const character: string = string[i];  /* n */
        arr.push(character); /* n */
    }
    const revertedString: string = arr.join(""); /* c */ 
    return revertedString; /* c */
}
/* the time complexity is O(n) */


// ## **Exercise 2**

// - [ ]  Palindrome Number

// **Objective**: Write a function that takes a number as input and if it’s a palindrome returns true, otherwise returns false.

// ### Description:

// - You are given an input number.
// - Your task is to write a function that checks if it is a palindrome.
// - The solution should handle input numbers of any length, including empty inputs.
// - Focus on writing clean, efficient code.

// ### Example:

// - Input: `2112`
// - Output: `true`


function isPalindrome(number: number){
    const stringNumber: string = number.toString(); /* c */
    let isPalindrome = true; /* c */
    for (let index = 0; index <= (stringNumber.length / 2); index++) { /* n */
        const a = stringNumber[index]; /* n */
        const b = stringNumber[stringNumber.length - 1 - index]; /* n */
        if(a !== b) isPalindrome = false; /* n */
    }
    return isPalindrome; /* c */
}
/* the time complexity is O(n/2) so it simplifies to O(n) */