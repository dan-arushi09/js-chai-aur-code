// // X to NUMBER CONVERSION

// let score = 33

// console.log(typeof score); // number
// console.log(typeof(score));  // print as a 'method'


// // case 1 :
// let score = "33"
// console.log(typeof score);

// let valueInNumber = Number(score)   // type conversion
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // score = 33


// //case 2 :
// let score = "33abc"
// console.log(typeof score);

// let valueInNumber = Number(score)   // type conversion
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // score = NaN : Not a Number


// // case 3 :
// let score = null
// console.log(typeof score); // object

// let valueInNumber = Number(score)   // type conversion
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // score = 0


// // case 4 :
// let score = undefined
// console.log(typeof score); // undefined

// let valueInNumber = Number(score)   // type conversion
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // score = NaN


// // case 5 :
// let score = false
// console.log(typeof score); // boolean

// let valueInNumber = Number(score)   // type conversion
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // score = 1 : true  ;  0 : false


// // case 6 :
// let score = "aarushi"
// console.log(typeof score); // string

// let valueInNumber = Number(score)   // type conversion
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // score = NaN


// // OBSERVATIONS from above ::
// // "33" => 33
// // "33abc" => NaN
// // null => 0
// // undefined => NaN
// // true => 1; false => 0
// // "aarushi" => NaN



// // X to BOOLEAN CONVERSION

// // case 1 :
// let isLoggedIn = 1
// // console.log(typeof isLoggedIn) // number

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// // console.log(typeof booleanIsLoggedIn); // boolean
// console.log(booleanIsLoggedIn); // true ;  isLoggedIn = 1 : true  ;  0 : false


// // case 2 :
// let isLoggedIn = ""

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); //false


// // case 3 :
// let isLoggedIn = "aarushi"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); //true


// // case 4 :
// let isLoggedIn = "aarushi"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); //true


// // OBSERVATIONS from above ::
// // 1 => true; 0 => false
// // "" => false
// // "hitesh" => true



// // X to STRING

// let someNumber = 33

// let stringNumber = String(someNumber)
// console.log(stringNumber); // "33" but printed as 33
// console.log(typeof stringNumber); // someNumber = string




// *********************** Operations ***********************

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

let score = 33
score is a number datatype : 100% sure

const {score} = req.body
here we don't know the datatype of score  ;  it can be string or number or boolean or object or array
-----------------------

NaN
a speacial type of value
--------------------------------------------------

link to study prefix or postfox operators :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
--------------------------------------------------------------------------------------

*/