/*
  Write code to remove duplicates from an unsorted linked list FOLLOW UP
  How would you solve this problem if a temporary buffer is not allowed?
*/

module.exports = function(list) {
  var current = list.head
    , tmp     = null
    , tmpV    = null

  while (current) {
    tmp  = current.next
    tmpV = null

    while (tmp) {
      if (current.data === tmp.data) {
        if (tmpV) {
          tmpV.next = tmp.next
        } else {
          current.next = tmp.next
        }
      }

      tmpV = tmp
      tmp  = tmp.next
    }
    current = current.next
  }

  return list
}
