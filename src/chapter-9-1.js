module.exports = function(arr1, arr2) {
  var i = arr1.length - arr2.length - 1
    , j = arr2.length - 1

  for (var x = arr1.length - 1; x >= 0; x--) {
    if ((j < 0) && (i < 0)) {
      // nothing to do
    } else {
      if (j < 0) {
        arr1[x] = arr1[i]
        i--
      } else if (i < 0) {
        arr1[x] = arr2[j]
        j--
      } else if (arr1[i] > arr2[j]) {
        arr1[x] = arr1[i]
        arr1[i] = null
        i--
      } else {
        arr1[x] = arr2[j]
        j--
      }
    }
  }

  return arr1
}
