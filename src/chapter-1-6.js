/*
  Given an image represented by an NxN matrix, where each pixel in the
  image is 4 bytes, write a method to rotate the image by 90 degrees.
  Can you do this in place?

  Simplified example:

  [                           [
    [a1, a2, a3, a4],           [1,2,3,4],
    [b1, b2, b3, b4],           [2,3,4,1],
    [c1, c2, c3, c4],           [3,4,1,2],
    [d1, d2, d3, d4],           [4,1,2,3]
  ]                           ]
  =>
  [                           [
    [d1, c1, b1, a1]            [4,3,2,1],
    [d2, c2, b2, a2]            [1,4,3,2],
    [d3, c3, b3, a3]            [2,1,4,3],
    [d4, c4, b4, a4]            [3,2,1,4]
  ]                           ]
*/

module.exports = function(matrix) {
  var result = []
    , n      = matrix.length
    , value  = null

  for (var row = 0; row < n; row++) {
    for (var col = 0; col < n; col++) {
      value       = matrix[row][col]
      result[col] = result[col] || []

      result[col][n - row - 1] = value
    }
  }

  return result
}
