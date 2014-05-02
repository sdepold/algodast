/*
  Write a method to decide if two strings are anagrams or not.
*/

module.exports = function(a, b) {
  return a.split("").sort().join("") == b.split("").sort().join("")
}
