var expect = require('expect.js')
  , dataTypes = require(__dirname + "/../data-types")

var fun = function(tree) {
  var result = []

  var recordLevelNodes = function(node, i) {
    result[i] = result[i] || new dataTypes['singly-linked-list']
    result[i].add(node.data)

    if (node.left) { recordLevelNodes(node.left, i + 1) }
    if (node.right) { recordLevelNodes(node.right, i + 1) }
  }

  recordLevelNodes(tree.root, 0)

  return result
}

describe('fun', function() {
  it("works", function() {
    var tree = new dataTypes['binary-search-tree']

    tree.add(4)
    tree.add(2)
    tree.add(6)
    tree.add(1)
    tree.add(3)
    tree.add(5)
    tree.add(7)

    var result = fun(tree)

    expect(result.length).to.eql(3)
    expect(result[0].toArray()).to.eql([4])
    expect(result[1].toArray()).to.eql([2,6])
    expect(result[2].toArray()).to.eql([1,3,5,7])
  })
})
