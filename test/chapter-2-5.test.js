var expect = require('expect.js')
  , path   = require('path')
  , SLL    = require(path.resolve(__dirname, '..', 'src', 'chapter-2-0'))
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-2-5'))

describe('chapter-2-5', function() {
  beforeEach(function() {
    this.list = new SLL()
    this.list.push(3)
    this.list.push(1)
    this.list.push(5)

    this.node = this.list.head.next

    this.list.head.next.next.next = this.node
    // => 3,1,5,1,...
  })

  it("returns the node containing 1", function() {
    expect(fun(this.list)).to.eql(this.node)
  })
})
