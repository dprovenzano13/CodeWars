/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!*/

// function double(str) {
//     let doubledString = ''
// for(let i = 0; i < str.length; i++){
//   doubledString += str[i] + str[i]
// }
// return doubledString
// }

const doubleChar = (str) => str.split("").map(c => c + c).join("");