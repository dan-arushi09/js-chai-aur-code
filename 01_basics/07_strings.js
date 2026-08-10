const name = "Aarushi" // string declaration
const repoCount = 50

console.log(name + repoCount + " Value");  // this is not a right way to concatenate a string ; use this instead

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// string declaration as an object-type
const gameName = new String('aarushihc')
console.log(typeof gameName) // object

console.log(gameName[0]);
console.log(gameName.__proto__); // {} : filhaal it is empty

// METHODS of string
console.log(gameName.length); // 9
console.log(gameName.toUpperCase()); // all caps
console.log(gameName.charAt(2)); // r
console.log(gameName.indexOf('t')); // -1  :  't' is not in the string
console.log(gameName.indexOf('h')); // 5  : first occurrence

//some OTHER METHODS
const gameName2 = new String('aarushi-hc')

const newString = gameName2.substring(0, 3)  // 3  : excluded
console.log(newString);  // aar

const anotherString = gameName2.slice(-8, 4) // -ve values allowed
console.log(anotherString); // ru

const newStringOne = "   aarushi    "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes extra spaces

const url = "https://aarushi.com/aarushi%18dandriyal"

console.log(url)
console.log(url.replace('%18', '-'))
console.log(url.replace('aarushi', 'yamini')) // changes the 1st occurrence only

console.log(url.includes('.com')) // true
console.log(url.includes('rabbit')) // false

const gameName3 = new String('aarushi-hc-teddy')
console.log(gameName3.split('-'));




/*------------------------------------------------------------------
NOTES :
----------

console.log(name + repoCount + " Value");   // wrong practice

console.log(`Hello my name is ${} and my repo count is ${}`);

// right practice
Use backticks  :  `..`
string interpolation hooga ??? -- we then have placeholders ${} and
We place our variables inside  :  {..}
-----------------------

in console (browser)
const gameName = new String('aarushihc') //object-type  :  as we've used keyword "new" here
gameName                        (enter)
vString {'aarushihc'}
0: "a"
1: "a"
2: "r"
3: "u"
4: "s"
5: "h"
6: "i"
7: "h"
8: "c"
Length: 9
// is string an array??
NO
its a key-value pair | string is an object-type HERE
--------------------------------------------------

read about String Methods -- for interview purposes
read more about "trim" method : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
----------------------------------------------

>> gameName2 = 'aarushi-hc'
const newString = gameName2.substring(0, 4);  // 4th index is always excluded
const anotherString = gameName2.slice(-8, 4);

>> newStringOne = "   aarushi    "
console.log(newStringOne.trim());// 'aarushi

>> url = "https://aarushi.com/aarushi%18dandriyal"
console.log(url.replace('%18', '-')); // rushi%18dand  :  rushi-dand

>> gameName3 = aarushi-hc-teddy
console.log(gameName3.split('-')); // [ 'aarushi', 'hc', 'teddy' ]


string methods we did in this section:
1. length => find length of the string
2. toUpperCase => result is all caps
3. charAt => we provide the index number : get the char present at that index
4. indexOf => we provide the character to check its index : present = the index of the first occurrence  ;  not present = -1
5. substring => do not incl. the end index | creates another string | doesn't allow for -ve numbers
6. slice => cuting of a string | allows -ve numbers
7. trim => removes extra spaces that we dont want to save in DB 
8. replace => a character from another
9. split => cuts the string into array n the basis of the SEPARATOR we give
10. [n] => index
e.g.  gameName = aarushihc
      console.log(gameName[0]);  // a
---------------------------

*/