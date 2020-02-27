// nTimes takes an integer and a function,
// and returns a function that will invoke
// the original function the first n times
// the new function is invoked. The nth + 1
// invocation (and all subsequent invocation)
// of the new function will return the result
// of the last func invocation. The new function
// should invoke func with any arguments passed
// to the new function.

// HINT: n-times is the generalized version of once.
// For example, passing 1 into n-times is the
// equivalent of the once function.

var nTimes = function(n, func) {
  var result;
  var maxCalls = n;
  var timesCalled = 1;

  return function() {
    if (timesCalled <= maxCalls) {
      // TIP: .apply(this, arguments) is the standard way to pass on all of the
      // information from one function call to another.
      result = func.apply(this, arguments);
      timesCalled++;
    }
    return result;
  };
};

const sum = function(a, b) {
  return a + b;
};

const nTimesSum = nTimes(4, sum);

console.log(nTimesSum(3, 5));
console.log(nTimesSum(3, 6));
console.log(nTimesSum(3, 7));
console.log(nTimesSum(3, 9));
console.log(nTimesSum(3, 10));
