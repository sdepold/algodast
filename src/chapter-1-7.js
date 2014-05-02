/*
  Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0.
*/

module.exports = function(matrix) {
  var m      = matrix.length
    , n      = matrix[0].length
    , result = cloneMatrix(matrix, m, n)

  for(var i = 0; i < m; i++) {
    for(var j = 0; j < n; j++) {
      var value = matrix[i][j]

      if (value === 0) {
        clearRow(result, i)
        clearCol(result, j)
      }
    }
  }

  return result
}

var cloneMatrix = function(matrix, m, n) {
  var result = []

  for(var i = 0; i < m; i++) {
    result[i] = []

    for(var j = 0; j < n; j++) {
      result[i][j] = matrix[i][j]
    }
  }

  return result
}

var clearRow = function(matrix, rowIndex) {
  for (var i = 0; i < matrix.length; i++) {
    matrix[rowIndex][i] = 0
  }
}

var clearCol = function(matrix, colIndex) {
  for (var i = 0; i < matrix[colIndex].length; i++) {
    matrix[i][colIndex] = 0
  }
}
