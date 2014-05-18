var expect = require('expect.js')
  , path   = require('path')
  , Tree   = require(path.resolve(__dirname, '..', 'src', 'chapter-4-0.js')).BinSearchTree
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-4-5.js'))

describe('chapter-4-5', function() {
  beforeEach(function() {
    this.tree = new Tree()

    this.tree.insertNode(10)
    this.tree.insertNode(5)
    this.tree.insertNode(7)
    this.tree.insertNode(3)
    this.tree.insertNode(2)
    this.tree.insertNode(1)
    this.tree.insertNode(4)
    this.tree.insertNode(15)
    this.tree.insertNode(13)
    this.tree.insertNode(11)
    this.tree.insertNode(14)

    this.tree.root.parent = null // 10 => null
    this.tree.root.left.parent = this.tree.root // 5 => 10
    this.tree.root.right.parent = this.tree.root // 15 => 10
    this.tree.root.right.left.parent = this.tree.root.right // 13 => 15
    this.tree.root.right.left.left.parent = this.tree.root.right.left // 11 => 13
    this.tree.root.right.left.right.parent = this.tree.root.right.left // 14 => 13
    this.tree.root.left.left.parent = this.tree.root.left // 3 => 5
    this.tree.root.left.right.parent = this.tree.root.left // 7 => 5
    this.tree.root.left.left.left.parent = this.tree.root.left.left // 2 => 3
    this.tree.root.left.left.left.left.parent = this.tree.root.left.left.left // 1 => 2
    this.tree.root.left.left.right.parent = this.tree.root.left.left // 4 => 3

    /*
      tree ===

                           10
                      5         15
                    3  7      13
                  2  4      11 14
                1
    */

    this.node = this.tree.root.left.left
    expect(this.node.data).to.eql(3)
  })

  it('works for inOrder', function() {
    expect(fun(this.tree, this.node, 'inOrder').data).to.eql(2)
  })

  it('works for preOrder', function() {
    expect(fun(this.tree, this.node, 'preOrder').data).to.eql(2)
  })

  it('works for postOrder', function() {
    expect(fun(this.tree, this.node, 'postOrder').data).to.eql(2)
  })
})
