/*
  Implement an algorithm to delete a node in the middle of a single linked list, given only access to that node
  EXAMPLE
  Input: the node ‘c’ from the linked list a->b->c->d->e
  Result: nothing is returned, but the new linked list looks like a->b->d->e
*/

module.exports = function(node) {
  node.data = node.next.data
  node.next = node.next.next
}
