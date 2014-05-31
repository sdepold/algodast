var expect = require('expect.js')
  , dataTypes = require(__dirname + "/../data-types")

var fun = function(arr) {
  if (arr.length === 0) {
    return null
  } else {
    var midIndex = ~~(arr.length / 2)
      , node     = null

    node = dataTypes['binary-search-tree'].createNode(arr[midIndex])
    node.left = fun(arr.slice(0, midIndex))
    node.right = fun(arr.slice(midIndex + 1))
    return node
  }
}

describe('fun', function() {
  it("returns the expected tree", function() {
    var arr  = [1,2,3,4,5,6,7]
      , tree = new dataTypes['binary-search-tree']

    tree.root = fun(arr)

    expect(tree.root.data).to.eql(4)
    expect(tree.root.left.data).to.eql(2)
    expect(tree.root.left.left.data).to.eql(1)
    expect(tree.root.left.right.data).to.eql(3)
    expect(tree.root.right.data).to.eql(6)
    expect(tree.root.right.left.data).to.eql(5)
    expect(tree.root.right.right.data).to.eql(7)
  })
})
