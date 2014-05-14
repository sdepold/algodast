var expect = require('expect.js')
  , path   = require('path')
  , Tree   = require(path.resolve(__dirname, '..', 'src', 'chapter-4-0.js')).BinTree
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-4-1.js'))

describe('chapter-4-1', function() {
  beforeEach(function() {
    this.unbalancedTree = new Tree()
    this.unbalancedTree.root = Tree.createNode(1)
    this.unbalancedTree.root.left = Tree.createNode(1)
    this.unbalancedTree.root.left.left = Tree.createNode(1)

    this.balancedTree = new Tree()
    this.balancedTree.root = Tree.createNode(1)
    this.balancedTree.root.left = Tree.createNode(1)
    this.balancedTree.root.right = Tree.createNode(1)
    this.balancedTree.root.right.left = Tree.createNode(1)
  })

  it('returns true for the balanced tree', function() {
    expect(fun(this.balancedTree)).to.eql(true)
  })

  it('returns false for the unbalanced tree', function() {
    expect(fun(this.unbalancedTree)).to.eql(false)
  })
})
