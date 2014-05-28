/*
- compare first element with the second
- if it is greater => swap them
- repeat with the second element until the last element
- repeat iteration arr.length times
*/
module.exports.bubbleSort = function(arr) {
  for (var i = 0, e = arr.length; i < e; i++) {
    for (var j = 0; j < e; j++) {
      if (arr[j] > arr[j+1]) {
        var tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    }
  }

  return arr
}

/*
- find the smallest element and move it to the front
- repeat
*/
module.exports.selectionSort = function(arr) {
  var tmp, swap, i, j;

  for (i = 0, e = arr.length; i < e; i++) {
    tmp = i

    for (j = i; j < e; j++) {
      if (arr[j] < arr[tmp]) {
        tmp = j
      }
    }

    swap = arr[tmp]
    arr[tmp] = arr[i]
    arr[i] = swap
  }

  return arr
}

module.exports.mergeSort = function(arr) {
  if (arr.length <= 1) {
    return arr
  } else {
    var midIndex = ~~(arr.length / 2)
    var leftArr  = arr.slice(0, midIndex)
    var rightArr = arr.slice(midIndex)

    leftArr  = module.exports.mergeSort(leftArr)
    rightArr = module.exports.mergeSort(rightArr)

    return merge(leftArr, rightArr)
  }
}

var merge = function(leftArr, rightArr) {
  var result = []

  while((leftArr.length > 0) && (rightArr.length > 0)) {
    if (leftArr[0] <= rightArr[0]) {
      result.push(leftArr[0])
      leftArr = leftArr.slice(1)
    } else {
      result.push(rightArr[0])
      rightArr = rightArr.slice(1)
    }
  }

  while(leftArr.length > 0) {
    result.push(leftArr.pop())
  }

  while(rightArr.length > 0) {
    result.push(rightArr.pop())
  }

  return result
}

module.exports.quickSort = function(arr, left, right) {
  if (typeof left === 'undefined') {
    return module.exports.quickSort(arr, 0, arr.length - 1)
  } else if (left < right) {
    var divisor = orderArr(arr, left, right)
    module.exports.quickSort(arr, left, divisor - 1)
    module.exports.quickSort(arr, divisor + 1, right)
    return arr
  } else {
    return arr
  }

}

var orderArr = function(arr, left, right) {
  var i = left
    , j = right
    , p = arr[right]

  // solange i an j nicht vorbeigelaufen ist
  while (i < j) {
    while ((arr[i] <= p) && (i < right)) {
      i++
    }

    while ((arr[j] >= p) && (j > left)) {
      j--
    }

    if (i < j) {
      var tmp = arr[i]
      arr[i]  = arr[j]
      arr[j]  = tmp
    }
  }

  if (arr[i] > p) {
    var tmp     = arr[i]
    arr[i]      = arr[right]
    arr[right]  = tmp
  }

  return i
}
