var expect = require('expect.js')
  , path   = require('path')
  , SLL    = require(path.resolve(__dirname, '..', 'src', 'chapter-2-0'))
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-2-4'))

describe('chapter-2-4', function() {
  beforeEach(function() {
    this.list1 = new SLL()
    this.list2 = new SLL()
    this.list1.push(3)
    this.list1.push(1)
    this.list1.push(5)

    this.list2.push(5)
    this.list2.push(9)
    this.list2.push(2)
  })

  it("returns the sum", function() {
    var sum = fun(this.list1, this.list2)
    expect(sum.head.data).to.eql(8)
    expect(sum.head.next.data).to.eql(0)
    expect(sum.head.next.next.data).to.eql(8)
    expect(sum.head.next.next.next).to.eql(null)
  })
})
