/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 */

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 */

var evenOccurrence = function(arr) {
  // create empty object to house array values and count;
  var keyCounts = {};
  // create empty object to house all array values that have occurred an even number of times
  var evenCounts = {};
  // Iterate over array
  for (var i = 0; i < arr.length; i++) {
    // If value has not been seen yet, add it to bucket and save its
    // index (first occurrence of value) and set count to 1
    if (!keyCounts[arr[i]]) {
      keyCounts[arr[i]] = {
        i: i,
        count: 1
      };
    } else {
      // If value seen before, increase count
      keyCounts[arr[i]].count += 1;
      // If value has appeared an even number of times, catalog that
      if (keyCounts[arr[i]].count % 2 === 0) {
        evenCounts[keyCounts[arr[i]].i] = true;
        // If value has now appeared an odd number of times, delete from catalog
      } else if (keyCounts[arr[i]].count % 2 === 1) {
        delete evenCounts[keyCounts[arr[i]].i];
      }
    }
  }
  // Grab leading indices of even count values
  const evenKeys = Object.keys(evenCounts);
  // If no even values found return null
  if (!evenKeys.length) {
    return null;
  }
  // Return minimum index from even-count catalog
  return Math.min(...evenKeys);
};
