var calculatePaths = module.exports = function(rows, cols) {
  if (typeof cols == 'undefined') {
    cols = rows
  }

  if ((rows == 1) && (cols == 1)) {
    return 0
  } else if (((rows == 1) && (cols == 2)) || ((rows == 2) && (cols == 1))) {
    return 1
  } else if (rows == 1) {
    return calculatePaths(rows, cols - 1)
  } else if (cols == 1) {
    return calculatePaths(rows - 1, cols)
  } else {
    return calculatePaths(rows, cols - 1) + calculatePaths(rows - 1, cols)
  }
}
