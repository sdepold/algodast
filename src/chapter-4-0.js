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

BinTree.prototype.maxDepth = function(root) {
  if (typeof root === 'undefined') {
    root = this.root
  }

  if (root === null) {
    return 0
  } else {
    return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
  }
}

BinTree.prototype.minDepth = function(root) {
  if (typeof root === 'undefined') {
    root = this.root
  }

  if (root === null) {
    return 0
  } else {
    return 1 + Math.min(this.minDepth(root.left), this.minDepth(root.right))
  }
}

var BinSearchTree = function() {
  this.root = null
}

BinSearchTree.prototype = Object.create(BinTree.prototype)
BinSearchTree.prototype.constructor = BinSearchTree

BinSearchTree.prototype.insertNode = function(data, parent) {
  if (!this.root) {
    this.root = BinTree.createNode(data)
  } else if (this.root && !parent) {
    this.insertNode(data, this.root)
  } else if (parent) {
    if (parent.data > data) {
      if (parent.left) {
        this.insertNode(data, parent.left)
      } else {
        parent.left = BinTree.createNode(data)
      }
    } else {
      if (parent.right) {
        this.insertNode(data, parent.right)
      } else {
        parent.right = BinTree.createNode(data)
      }
    }
  }
}

module.exports = {
  BinTree: BinTree,
  BinSearchTree: BinSearchTree
}
