/**
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *
 * @param {number} limit - Number of fibonacci numbers to be generated
 *
 * @returns {number[]}  - Fibonacci Serie
 */

function fibonacci(limit) {
  const FIB = [0, 1];

  for (let i = 2; i < limit; i++) {
    FIB.push(FIB[i - 1] + FIB[i - 2]);
  }

  return FIB;
}

module.exports = fibonacci;
