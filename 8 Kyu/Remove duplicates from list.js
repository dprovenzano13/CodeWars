// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
    let doup = [];
    for(let i = 0; i < a.length; i++){
      if(! doup.includes(a[i])){
        doup.push(a[i])
      }
    }
    return doup
  }