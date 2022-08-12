// Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum( a,b )
{
    sum = 0;
    if(a < b) {
      
        for(let i = a; i <= b; i++){
            sum += i
        }
    } else if (b < a){
      for(let i = b; i <= a; i++){
            sum += i
        }
    } else {
      return 0
    }
  return sum
}
//CORRECT
function getSum(a,b){
    let count = 0;
    if (a == b) return a;
    if(a < b){
      for (; a <= b; a++){
        count += a;
      }
    } else if (a > b){
        for(; b <= a; b++){
          count += b;
        }
    }
    return count;
  }