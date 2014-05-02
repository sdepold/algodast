/*
  Assume you have a method isSubstring which checks if one word is a substring
  of another Given two strings, s1 and s2, write code to check if s2 is a
  rotation of s1 using only one call to isSubstring.
*/

var isSubstring = function(s1, s2) {
  return s1.indexOf(s2) !== -1
}

module.exports = function(s1, s2) {
  return isSubstring(s1 + s1, s2)
}
