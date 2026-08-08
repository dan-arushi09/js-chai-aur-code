const accId = 987654
let accEmail = "aarushi@google.com"
var accPass = "12345"
accCity = "Delhi"
let accStatus;


// lets see if i can change these
// accId = 968574 // TypeError: Assignment to constant variable.

/* BEFORE
console.log(accId); 
console.log(accPass); 
console.log(accEmail); 
console.log(accCity);
*/

// AFTER
accEmail = "aa@gmail.com"
accPass = "00005"
accCity = "New York"

// console.log(accId); // there is other method to print all the variables at once
console.table([accEmail, accPass, accCity, accStatus]) //in tabular form
// accEmail, accPass, accCity --> changeable  ;  accId --> X changeable



/*------------------------------------------------------------------
NOTES : MULTI-LINE COMMENT mei likhe hein
----------

// SINGLE-LINE COMMENT
-----------------------

;  semi colon lagao na lagao koi problem nahi hai
--------------------------------------------------

accStatus sirf Declare kiya, but initialization nahi kiya
"accStatus" has a value 'undefined'
----------------------------------------------

VARIABLES:
1. const  -->  constant variable  ;  cannot be changed
2. let    -->  variable  ;  can be changed
3. var    -->  variable  ;  can be changed

4. w/o specifying any dtype (as in "accCity")  ;  can be changed

'var' {} = scope  ;  nahi samajhta, isiliye hum var ko use nahi krte
block and functional scope
---------------------------

*/