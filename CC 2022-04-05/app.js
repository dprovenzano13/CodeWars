// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


//P: Can you pass an operator as a parameter? 
//R: Return the result of the numbers from the chosen operation
//E: If I put in ('+', 3, 6), my return should be 9
//P: Make a function that takes in 3 parameters named operation, value1, value2
function quickMaths(operation, value1, value2){
    if(operation == '+') return value1 + value2
    if(operation == '-') return value1 - value2
    if(operation == '*') return value1 * value2
    if(operation == '/') return value1 / value2
}
// Should return the result of the numbers from the chosen operation
quickMaths('+', 3, 5)
console.log(quickMaths('+', 5, 5), 10)