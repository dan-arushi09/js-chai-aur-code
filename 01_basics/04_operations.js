let value = 3
let negValue = -value
console.log(negValue);

// arithmetic operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

// string operations
let str1 = "hello"
let str2 = " aarushi"

let str3 = str1 + str2
console.log(str3);

// issues
console.log("1" + 2); // simple string concatination
console.log(1 + "2"); // simple string concatination
console.log("1" + 2 + 2); // 122  ;  1 2 2 are all treated as string
console.log(1 + 2 + "2"); // 3 2  ;  but not here  :  the 1 + 2 = 3, and then "2" ---> 32
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion  :  guidelines are written here

// e.g. of messy code
console.log( (3 + 4) * 5 % 3); // use parenthesis for better readability

console.log(+true); // 1
// console.log(true+); // ERROR

console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2


let gameCounter = 100
++gameCounter; // prefix
console.log(gameCounter); // 101
gameCounter++; // postfix




/*------------------------------------------------------------------
NOTES :
----------

link to study :
https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
--------------------------------------------------------------------------------------

*/