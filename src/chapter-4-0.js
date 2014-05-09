var BinTree = function() {
  this.root = null
}

BinTree.createNode = function(data) {
  return { data: data, left: null, right: null }
}

// left, node, right
BinTree.prototype.inOrder = function(fun, node) {
  node = typeof node === 'undefined' ? this.root : node

  if (node.left) { this.inOrder(fun, node.left) }
  fun(node)
  if (node.right) { this.inOrder(fun, node.right) }
}

// node, left, right
BinTree.prototype.preOrder = function(fun, node) {
  node = typeof node === 'undefined' ? this.root : node

  fun(node)
  if (node.left) { this.preOrder(fun, node.left) }
  if (node.right) { this.preOrder(fun, node.right) }
}

// left, right, node
BinTree.prototype.postOrder = function(fun, node) {
  node = typeof node === 'undefined' ? this.root : node

  if (node.left) { this.postOrder(fun, node.left) }
  if (node.right) { this.postOrder(fun, node.right) }
  fun(node)
}

module.exports = {
  BinTree: BinTree
}
