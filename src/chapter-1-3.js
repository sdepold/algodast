/*
  Design an algorithm and write code to remove the duplicate characters in a
  string without using any additional buffer. NOTE: One or two additional
  variables are fine. An extra copy of the array is not.
*/

module.exports = function(s) {
  return s.split("").reduce(function(result, char) {
    if (result.indexOf(char) === -1) {
      return result + char
    } else {
      return result
    }
  }, "")
}
