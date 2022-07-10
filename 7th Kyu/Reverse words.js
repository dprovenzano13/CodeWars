/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"*/

let reverseWords = (str) => {
    let splitByWord = str.split(/(\s+)/)
    let newArr = []
    splitByWord.forEach( e => {
      let split = e.split('').reverse().join('')
      newArr.push(split)
    })
        return newArr.join('')
  }