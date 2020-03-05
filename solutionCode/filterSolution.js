// Your task is to reimplement the function filter.
// As input, filter takes two parameters.

// An array
// A function
// As output, filter creates a new array with all elements that pass
//  the test implemented by the provided function. If no elements
// pass the test, an empty array will be returned.

// filter should call its input function on each element contained in
// the input array. That element should either pass or fail the test
// function. filter should return all elements passing the test function
// in a new array.
// DO NOT use array.filter

// To help you implement filter, observe the examples below.

// filter([1,2,3,4],function evensOnly(element){
//   return element % 2 === 0;
// }) //=> [2,4]

// filter([12, 5, 8, 130, 44],function biggerThanTen(element){
//   return element > 10;
// }) //=> [12, 130, 44]

function filter(array, func) {
  const filteredArray = [];
  array.forEach(element => {
    if (func(element)) {
      filteredArray.push(element);
    }
  });
  return filteredArray;
}
