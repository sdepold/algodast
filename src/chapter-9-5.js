module.exports = function(arr, needle) {
  var i = 0
    , l = arr.length

  while (i < l) {
    if (arr[i] === needle) {
      return i
    } else if (arr[i] === "") {
      while(arr[i] === "") {
        i++
      }
    } else {
      i++
    }
  }

  return -1
}
