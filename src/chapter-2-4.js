/*
  You have two numbers represented by a linked list, where each node contains a sin- gle digit The digits are stored in reverse order, such that the 1’s digit is at the head of the list Write a function that adds the two numbers and returns the sum as a linked list
  EXAMPLE
  Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
  Output: 8 -> 0 -> 8
*/

var path = require('path')
  , SLL  = require(path.resolve(__dirname, 'chapter-2-0'))

module.exports = function(list1, list2) {
  var result   = new SLL()
    , current1 = list1.head
    , current2 = list2.head
    , overflow = 0
    , dummy    = SLL.createNode(0)

  while (current1 || current2) {
    var sum = (current1 || dummy).data + (current2 || dummy).data + overflow

    if (sum >= 10) {
      overflow = 1
      sum      = sum - 10
    } else {
      overflow = 0
    }

    result.push(sum)

    if (current1) { current1 = current1.next }
    if (current2) { current2 = current2.next }
  }

  return result
}
