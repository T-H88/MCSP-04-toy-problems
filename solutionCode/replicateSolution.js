// Design a recursive function called replicate which takes arguments times and number.

// The function should return an array containing repetitions of the number argument.

// For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative,
// return an empty array.

// As tempting as it may seem, DO NOT use loops to solve this problem.

// replicate(0,12)  //=>[]
// replicate(-1,12) //=>[]
// replicate(3,5)   //=>[5, 5, 5]
// replicate(5,1)   //=>[1, 1, 1, 1, 1]
// replicate(8,0)   //=>[0, 0, 0, 0, 0, 0, 0, 0]

function replicate(times, number) {
  if (times <= 0) {
    return [];
  }
  return [number].concat(replicate(times - 1, number));
}
