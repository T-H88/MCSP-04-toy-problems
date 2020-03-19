/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

//creat an empty array that can be pushed into
// iterate through each letter 
// create a base case


var allAnagrams = function(string, anagram) {
var anagrams = [];
  if (!string) {
    allAnagrams.push(anagram)
    return;
  }
 for ( var i = 0; i < string.length; i++) {
   anagram += word[i];

 }

};
