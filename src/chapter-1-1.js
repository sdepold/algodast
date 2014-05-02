/*
  Implement an algorithm to determine if a string has all unique
  characters. What if you can not use additional data structures?
*/

module.exports = function(s) {
  var _s = s.split('').sort('').join('')

  for (var i = 1; i < _s.length; i++) {
    if (_s[i - 1] === _s[i]) {
      return false
    }
  }

  return true
}
