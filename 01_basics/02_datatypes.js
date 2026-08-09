// "use strict"; // treat all JS code as newer version

// alert(3+3) // ReferenceError: alert is not defined

let name = "aarushi"
let age = 21
let isLoggedIn = false
let state; // undefined

const id = Symbol("123")
const id2 = Symbol("123")
console.log(id === id2) // false  ;  id != id2

const largeNum = 3248623876385736n // bigInt

let temp = null // object
console.log(typeof temp)

/*
Primitive datatypes :
1. number => float, integers
2. bigint 
3. string
4. boolean
5. null => empty value
6. undefined
7. symbol => unique value
*/



let myObj = {
    name: "aarushi",
    age: 21,
} //  object

const heroes = ["loki", "martha", "steve"];  // arrays

const myFunction = function(){
    console.log("namaste dunia!");
} // function

console.log(typeof myObj); // object
console.log(typeof heroes); // object
console.log(typeof myFunction); // function

/*
Non-primitive datatypes : Reference types
object
arrays
function
*/


console.log(typeof name); // string
console.log(typeof age); // number

console.log(typeof undefined); // undefined
console.log(typeof null); // object  :  bug in js ; historical mistake

// datatyeps in js
// https://262.ecma-international.org/5.1/#sec-11.4.3




/*------------------------------------------------------------------
NOTES
----------

JavaScript is a dynamically typed language.
---------------------------------------------

"use strict";
no such thing as  :  use-unstrict
------------------

alert(3+3)
ReferenceError: alert is not defined
ERROR cz we r using nodejs; not browser
---------------------------

;   somewhere they r used, and elsewhere they r not ??????

"use strict";
alert(3+3)

;   -->  indicates a line break
console. log(3 + 3); console. log("Aarushi")

console. log(3 + 3)
console. log("Aarushi")

both are correct / not a right practice
------------------

https://tc39.es/ecma262/#sec-intro
ORIGINAL DOCUMENTATION  :  js standards

https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
EASILY READABLE
---------------------------------------------------------------

DATATYPES : on the basis of how they are stored in memory && accessed
  Primitive datatypes:
1. number => 2^53 (range)  ;  2^53-1 = 9007199254740991
2. bigint => to store very large numbers
3. string => ""
4. boolean => true/false
5. null => standalone value
6. undefined => unintialized variable : variable not assigned any value  ;  unintentional value
7. symbol => unique

- primitives are immutable (cannot be changed)
- primitives are compared by value (copied by value)
- primitives are stored in stack memory
- primitives are faster to access


  Non-primitive or Reference datatypes:
8. object => key-value pair  ;  collection of properties
9. array => collection of values  ;  ordered list of values
10. function => block of code

- non-primitives are mutable (can be changed)
- non-primitives are compared by reference (memory addresses)
- non-primitives are stored in heap memory
- non-primitives are slower to access
---------------------------------------------------------------

typeof operator :  to check the datatype of a variable

console.log(typeof myFunction);   // function  ;  object function bolte hein waise

let city = undefined;  // type is : undefined

const id = Symbol("123") // symbol
const id2 = Symbol("123") // symbol

const largeNum = 3248623876385736n
console.log(typeof largeNum) // bigInt

let temp = null
console.log(typeof temp) // object
---------------------------------------------------------------
*/