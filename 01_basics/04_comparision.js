// comparision operators
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// NORMAL CHECK
console.log("2" > 1); // true
console.log("02" > 1); // true

// possible issues : unpredictable results
// null =0  or  !=0 ??
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true ???? check:Notes

// undefined ?
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// STRICT CHECK
// ===  :  checks if same datatype ??
console.log("2" === 2);
console.log("2" === "2");

// "null"
console.log(null === 0); // false

// "undefined"
console.log(undefined === 0); // false




/*------------------------------------------------------------------
NOTES :
----------

console.log("2" > 1);

apne aap hee javascript ne "2" ko number mei convert kr diya
but SOMETIMES, the results are unpredicted
so we use TYPESCRIPT, but in JAVASCRIPT if we decide onto some rules  ;  then TypeScript ~ JavaScript
-----------------------

console.log(null >= 0);

An equality check == and comparisons  >  <  >=  <=  work differently.
Comparisons convert 'null' to a number, treating it as 0.
hence : null >= 0 is true and null > 0 is false.
--------------------------------------------------

===  is strict check
it also check for the same datatypes

console.log("2" === 2); // false
console.log("2" === "2"); // true
----------------------------------------------
*/