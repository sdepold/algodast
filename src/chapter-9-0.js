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
