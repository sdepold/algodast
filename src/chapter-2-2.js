/*
  Implement an algorithm to find the nth to last element of a singly linked list.
*/

module.exports = function(list, n) {
  var current = list.head

  while (current) {
    var tmp = current

    for (var i = 1; i < n; i++) {
      if (tmp.next) {
        tmp = tmp.next
      } else {
        break
      }
    }

    if (tmp && tmp.next === null) {
      return current
    }

    current = current.next
  }

  return null
}
