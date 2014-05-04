/*
  How would you design a stack which, in addition to push and pop, also has a
  function min which returns the minimum element? Push, pop and min should all
  operate in O(1) time.
*/

module.exports = function(stack) {
  var current = stack.top
    , min     = current

  while (current) {
    if (current.data < min.data) {
      min = current
    }

    current = current.next
  }

  return min
}
