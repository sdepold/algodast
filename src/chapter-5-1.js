/*
  You are given two 32-bit numbers, N and M, and two bit positions, i and j.
  Write a method to set all bits between i and j in N equal to M (e.g., M
  becomes a substring of N located at i and starting at j).

  EXAMPLE:
  Input: N = 10000000000, M = 10101, i = 2, j = 6
  Output: N = 10001010100
*/

module.exports = function(n, m, i, j) {
  var trueMask = parseInt(Array(33 - j).join("1") + Array(j-i+1).join("0") + Array(i + 1).join("1"), 2)

  // reset the bits in the window
  n = n & trueMask

  // add some spacing to m so that it fits into the window
  m = m << i

  // enable the bits of m in the window
  n = n | m

  return n
}
