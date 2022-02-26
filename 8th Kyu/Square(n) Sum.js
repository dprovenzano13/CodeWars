//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
let nums = [1, 2, 2]

function squareSum(arr){
  let sum = 0
    arr.forEach(e =>{
    let square = Math.pow(e,2)
    return sum += square
    })
  return sum
}

squareSum(nums)