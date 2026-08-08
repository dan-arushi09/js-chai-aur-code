"use strict"; // treat all JS code as newer version

// alert(3+3) // ReferenceError: alert is not defined

let name = "aarushi"
let age = 21
// let isLoggedIn = false
// let state;

/*
Primitive datatypes :
number
bigint 
string
boolean
null => empty value
undefined
symbol

Non-primitive datatypes :
object
*/

// console.log(typeof name); // string
// console.log(typeof age); // number

// console.log(typeof undefined); // undefined
console.log(typeof null); // object  :  bug in js ; historical mistake





/*------------------------------------------------------------------
NOTES
----------

"use strict";
no such thing as  :  use-ustrict
------------------

alert(3+3)
ReferenceError: alert is not defined
ERROR cz we r using nodejs; not browser
---------------------------

;   somewhere they r used, and elsewhere they r not ??????

"use strict";
alert(3+3)

;   -->  indicates a line brake
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

DATATYPES:
Primitive datatypes:
1. number => 2^53 (range)  ;  2^53-1 = 9007199254740991
2. bigint => 2^53 (range)  ;  2^53-1 = 9007199254740991
3. string => ""
4. boolean => true/false
5. null => standalone value
6. undefined => unintialized variable : variable not assigned any value  ;  unintentional value
7. symbol => unique

Non-primitive datatypes:
8. object => key-value pair  ;  collection of properties
---------------------------------------------------------------

typeof operator :  to check the datatype of a variable
// console.log(typeof 21n); // bigint
// console.log(typeof true); // boolean
// console.log(typeof false); // boolean
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined
// console.log(typeof Symbol("id")); // symbol
// console.log(typeof {name: "aarushi", age: 21}); // object
---------------------------------------------------------------
*/