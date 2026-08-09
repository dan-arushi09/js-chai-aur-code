// Stack (Primitive)  :  value (copy of value)

let mySweetname = "yamini"

let anothername = mySweetname
anothername = "aarushi"

console. log (mySweetname) ;
console. log (anothername) ;
// we see that "mySweetname" has not changed  ;  cz a copy of value inside "mySweetname" was provided to "anothername"


// Heap (Non-Primitive)  :  reference (memory address)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne
console.log(userOne.email);

//after
userTwo.email = "rabbit@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// // we see that "userOne" has changed  ;  cz the refrence / memory address of "userOne" was provided to "userTwo"




/*------------------------------------------------------------------
NOTES :
----------
 ___________                         ______________________
|           |                       |                      |
|___________|                       |                      |
|           |                       |                      |
|___________|                       |                      |
|           |                       |                      |
|___________|                       |                      |
|           |                       |                      |
|___________|                       |______________________|
    Stack                                     Heap

memory representations
---------------------------------------------------------------------
*/