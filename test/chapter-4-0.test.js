var expect = require('expect.js')
  , path   = require('path')
  , Tree   = require(path.resolve(__dirname, '..', 'src', 'chapter-4-0')).BinTree
  , BSTree = require(path.resolve(__dirname, '..', 'src', 'chapter-4-0')).BinSearchTree

describe('chapter-4-0', function() {
  describe('Binary Tree', function() {
    beforeEach(function() {
      this.tree = new Tree()

      this.tree.root = Tree.createNode("P")
      this.tree.root.left = Tree.createNode("M")
      this.tree.root.left.left = Tree.createNode("S")
      this.tree.root.left.left.left = Tree.createNode("A")
      this.tree.root.left.left.right = Tree.createNode("A")

      this.tree.root.right = Tree.createNode("L")
      this.tree.root.right.right = Tree.createNode("E")
      this.tree.root.right.right.right = Tree.createNode("R")
      this.tree.root.right.right.right.left = Tree.createNode("T")
      this.tree.root.right.right.right.right = Tree.createNode("E")
      this.tree.root.right.right.right.right.left = Tree.createNode("E")
    })

    describe('inOrder', function() {
      it('returns ASAMPLETREE', function() {
        var result = ""
        this.tree.inOrder(function(node) { result += node.data })
        expect(result).to.eql("ASAMPLETREE")
      })
    })

    describe('preOrder', function() {
      it('returns PMSAALERTEE', function() {
        var result = ""
        this.tree.preOrder(function(node) { result += node.data })
        expect(result).to.eql("PMSAALERTEE")
      })
    })

    describe('postOrder', function() {
      it('returns AASMTEERELP', function() {
        var result = ""
        this.tree.postOrder(function(node) { result += node.data })
        expect(result).to.eql("AASMTEERELP")
      })
    })
  })

  describe('Binary Search Tree', function() {
    beforeEach(function() {
      this.tree = new BSTree()
    })

    describe('insertNode', function() {
      it('inserts the nodes in the right order', function() {
        this.tree.insertNode(10)
        this.tree.insertNode(5)
        this.tree.insertNode(7)
        this.tree.insertNode(3)
        this.tree.insertNode(15)
        this.tree.insertNode(12)
        this.tree.insertNode(20)

        var result = ""
        this.tree.inOrder(function(node) { result += node.data })
        expect(result).to.eql("35710121520")
      })
    })
  })
})
