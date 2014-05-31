var expect = require('expect.js')
  , dataTypes = require(__dirname + "/../data-types")

var fun = function(tree) {
  return (tree.maxDepth() - tree.minDepth()) <= 1
}

describe('fun', function() {
  it("returns false if the tree is not balanced", function() {
    var tree = new dataTypes['binary-search-tree']

    tree.add(5)
    tree.add(4)
    tree.add(3)
    tree.add(2)
    tree.add(1)

    expect(fun(tree)).to.eql(false)
  })

  it("returns true if the tree is balanced", function() {
    var tree = new dataTypes['binary-search-tree']

    tree.add(5)
    tree.add(6)
    tree.add(4)

    expect(fun(tree)).to.eql(true)
  })
})
