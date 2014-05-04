/*
  Given a circular linked list, implement an algorithm which returns node at the begin- ning of the loop
  DEFINITION
  Circular linked list: A (corrupt) linked list in which a node’s next pointer points to an earlier node, so as to make a loop in the linked list
  EXAMPLE
  input: A -> B -> C -> D -> E -> C [the same C as earlier]
  output: C
*/

module.exports = function(list) {
  var current = list.head
    , index   = 0

    while (current) {
      var tmp      = list.head
        , tmpIndex = 0

      while (tmp && (tmpIndex < index)) {
        if (current === tmp) {
          return tmp
        }

        tmpIndex++
        tmp = tmp.next
      }

      index++
      current = current.next
    }

    return null
}
