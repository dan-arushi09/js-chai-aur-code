// X to NUMBER CONVERSION

let score = 33

console.log(typeof score); // number
console.log(typeof(score));  // print as a 'method'


// case 1 :
let score = "33"
console.log(typeof score);

let valueInNumber = Number(score)   // type conversion
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // score = 33


//case 2 :
let score = "33abc"
console.log(typeof score);

let valueInNumber = Number(score)   // type conversion
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // score = NaN : Not a Number


// case 3 :
let score = null
console.log(typeof score); // object

let valueInNumber = Number(score)   // type conversion
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // score = 0


// case 4 :
let score = undefined
console.log(typeof score); // undefined

let valueInNumber = Number(score)   // type conversion
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // score = NaN


// case 5 :
let score = false
console.log(typeof score); // boolean

let valueInNumber = Number(score)   // type conversion
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // score = 1 : true  ;  0 : false


// case 6 :
let score = "aarushi"
console.log(typeof score); // string

let valueInNumber = Number(score)   // type conversion
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // score = NaN


// OBSERVATIONS from above ::
// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1; false => 0
// "aarushi" => NaN



// X to BOOLEAN CONVERSION

// case 1 :
let isLoggedIn = 1
// console.log(typeof isLoggedIn) // number

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn); // boolean
console.log(booleanIsLoggedIn); // true ;  isLoggedIn = 1 : true  ;  0 : false


// case 2 :
let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //false


// case 3 :
let isLoggedIn = "aarushi"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //true


// case 4 :
let isLoggedIn = "aarushi"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //true


// OBSERVATIONS from above ::
// 1 => true; 0 => false
// "" => false
// "hitesh" => true



// X to STRING

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); // "33" but printed as 33
console.log(typeof stringNumber); // someNumber = string




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
*/