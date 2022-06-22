// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.


// If we want to check if the array contains a specific letter...
let check = (a,x) => a.toString().split('').includes(x)? true : false 

// If we want to check for just a specific value in the array

function check(a,x){
    return a.includes(x);
  };