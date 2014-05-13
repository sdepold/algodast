var expect = require('expect.js')
  , path   = require('path')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-4-3.js'))

describe('chapter-4-3', function() {
  it('transforms an array into a binary search tree', function() {
    var tree   = fun([1,2,3,4,5,6,7])
      , result = ""

    expect(tree.data).to.eql(4)
    expect(tree.left.data).to.eql(2)
    expect(tree.left.left.data).to.eql(1)
    expect(tree.left.right.data).to.eql(3)
    expect(tree.right.data).to.eql(6)
    expect(tree.right.left.data).to.eql(5)
    expect(tree.right.right.data).to.eql(7)
  })
})
