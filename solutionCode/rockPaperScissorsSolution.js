/*
 * Write a function that generates every sequence of throws a single
 * player could throw over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   ["RRR",
 *    "RRP",
 *    "RRS",
 *    "RPR",
 *    ...etc...
 *   ]
 *
 * Extra credit:
 *   - Make your function return answers for any number of rounds.
 *
 * Example:
 * rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
 *
 */

var rockPaperScissors = function(rounds = 3) {
  var rps = ["R", "P", "S"];
  var sequences = [];
  var sqn = "";

  // need to go #rounds 'deep', every combo of 3 each time
  const goRoundsDeep = function(round, sqn) {
    if (round === rounds) {
      sequences.push(sqn);
      return;
    } else {
      for (let i = 0; i < rps.length; i++) {
        goRoundsDeep(round + 1, sqn + rps[i]);
      }
      return true;
    }
  };
  goRoundsDeep(0, sqn);
  return sequences;
};

/**
 * Learn App Variation:
 * 
 * Rock Paper Scissors Permutations
 * Rock Paper Permutation Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

 * rockPaperPermutation(0) //=> []
 * rockPaperPermutation(1) //=> ['r','p','s']
 * rockPaperPermutation(2) //=> ['rr','rp','rs','pr','pp','ps','sr','sp','ss']
 * 
 */

function rockPaperPermutations(rounds) {
  // If no rounds provided return empty
  if (!rounds) {
    return [];
  }
  const lib = ["r", "p", "s"];
  const permutations = [];

  const inner = function(n, perm) {
    // 'base' case. If we are at correct rounds deep, save this round
    if (n === rounds) {
      permutations.push(perm);
      return;
    }
    // otherwise add each of R,P,S to the end of the current round and recurse
    for (let i = 0; i < lib.length; i++) {
      inner(n + 1, perm + lib[i]);
    }
  };
  // initial call of 0th round and empty string
  inner(0, "");
  return permutations;
}
