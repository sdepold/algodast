/*
  Write an algorithm to find the ‘next’ node (i.e., in-order successor)
  of a given node in a binary search tree where each node has a link to its
  parent.
*/

module.exports = function(tree, node, iterator) {
  var result = null

  tree[iterator](function(_node) {
    if (_node.parent && !result && (_node.parent.data === node.data)) {
      result = _node
    }
  })

  return result
}
