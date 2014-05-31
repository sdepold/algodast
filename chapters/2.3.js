var expect = require('expect.js')
  , dataTypes = require(__dirname + "/../data-types")

var fun = function(node) {
  var following = node.next

  node.data = following.data
  node.next = following.next
}

describe('fun', function() {
  it("returns removes a the node", function() {
    var list = new dataTypes['singly-linked-list']

    list.add('a')
    list.add('b')
    var node = list.add('c')
    list.add('d')
    list.add('e')

    fun(node)

    expect(list.toArray()).to.eql(["a", "b", "d", "e"])
  })
})
