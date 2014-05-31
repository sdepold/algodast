var BinarySearchTree = module.exports = function() {
  this.root = null
}

BinarySearchTree.createNode = function(data) {
  return { data: data, left: null, right: null }
}

BinarySearchTree.prototype.add = function(data, scope) {
  if (this.root === null) {
    this.root = BinarySearchTree.createNode(data)
  } else {
    scope = scope || this.root

    if  (data < scope.data) {
      if (scope.left) {
        return this.add(data, scope.left)
      } else {
        return scope.left = BinarySearchTree.createNode(data)
      }
    } else {
      if (scope.right) {
        return this.add(data, scope.right)
      } else {
        return scope.right = BinarySearchTree.createNode(data)
      }
    }
  }
}

BinarySearchTree.prototype.minDepth = function(scope) {
  if (typeof scope === 'undefined') {
    scope = this.root
  }

  if (!scope) {
    return 0
  } else {
    return 1 + Math.min(this.minDepth(scope.left), this.minDepth(scope.right))
  }
}

BinarySearchTree.prototype.maxDepth = function(scope) {
  if (typeof scope === 'undefined') {
    scope = this.root
  }

  if (!scope) {
    return 0
  } else {
    return 1 + Math.max(this.maxDepth(scope.left), this.maxDepth(scope.right))
  }
}

BinarySearchTree.prototype.inOrder = function(callback, node) {
  if (typeof node === 'undefined') {
    this.inOrder(callback, this.root)
  } else {
    if (node.left) { this.inOrder(callback, node.left) }
    callback(node.data)
    if (node.right) { this.inOrder(callback, node.right) }
  }
}

BinarySearchTree.prototype.preOrder = function(callback, node) {
  if (typeof node === 'undefined') {
    this.preOrder(callback, this.root)
  } else {
    callback(node.data)
    if (node.left) { this.preOrder(callback, node.left) }
    if (node.right) { this.preOrder(callback, node.right) }
  }
}

BinarySearchTree.prototype.postOrder = function(callback, node) {
  if (typeof node === 'undefined') {
    this.postOrder(callback, this.root)
  } else {
    if (node.left) { this.postOrder(callback, node.left) }
    if (node.right) { this.postOrder(callback, node.right) }
    callback(node.data)
  }
}
