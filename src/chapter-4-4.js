/*
  Given a binary search tree, design an algorithm which creates a linked list
  of all the nodes at each depth (i.e., if you have a tree with depth D, you’ll
  have D linked lists).
*/

var path = require('path')
  , SLL  = require(path.resolve(__dirname, 'chapter-2-0'))

module.exports = function(tree) {
  var result = []

  var collectLevelNodes = function(node, i) {
    if (node) {
      result[i] = result[i] || new SLL()

      result[i].push(node.data)
      collectLevelNodes(node.left, i + 1)
      collectLevelNodes(node.right, i + 1)
    }
  }

  collectLevelNodes(tree.root, 0)

  return result
}
