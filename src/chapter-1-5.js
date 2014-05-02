/*
  Write a method to replace all spaces in a string with ‘%20’.
*/

module.exports = function(s) {
  var result = ""

  s.split("").forEach(function(char) {
    if (char === ' ') {
      result = result + "%20"
    } else {
      result = result + char
    }
  })

  return result
}
