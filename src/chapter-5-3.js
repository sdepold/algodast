/*
  Given an integer, print the next smallest and next largest number that have
  the same number of 1 bits in their binary representation.
*/

var trueMask = function(length) {
  return parseInt(Array(length + 1).join("1"), 2)
}

module.exports.next = function(num) {
  // 1101 -> 1110

  var trueMask = parseInt(Array(33).join("1"), 2)

}

module.exports.prev = function(num) {
  if ((num | trueMask(num.toString(2).length)) === num) {
    // the number only contains 1's
    throw new Error("Unable to find a smaller number.")
  } else if ((num & 1) === 1) {
    // the numbers ends on 1
    num = num >> 1
    console.log(num.toString(2))

    var shifted   = false
      , numLength = num.toString(2).length

    for (var i = numLength-1; i >= 0; i--) {
      var mask = (1 << i)

      if (!shifted) {
        if ((num & mask) !== mask) {
          // we just hit a zero!
          num = num | (1 << i)
        }
      } else {

      }
    }
  } else {
    return ((num >> 2) << 2) | 1
  }
}
