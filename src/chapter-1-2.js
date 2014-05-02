/*
  Write code to reverse a C-Style String. (C-String means
  that “abcd” is represented as five characters, including
  the null character.)
*/

module.exports = function(s) {
  var result = ""

  for (var i = s.length - 2; i >= 0; i--) {
    result = result + s[i]
  }

  return result + "\0"
}
