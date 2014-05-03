var expect = require('expect.js')
  , path   = require('path')
  , SLL    = require(path.resolve(__dirname, '..', 'src', 'chapter-2-0'))
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-2-1'))

describe('chapter-2-1', function() {
  beforeEach(function() {
    this.list = new SLL()
    this.list.push(1)
    this.list.push(2)
    this.list.push(3)
    this.list.push(2)
    this.list.push(5)
  })

  it("removes the duplicates", function() {
    fun(this.list)
    expect(this.list.head.data).to.eql(1)
    expect(this.list.head.next.data).to.eql(2)
    expect(this.list.head.next.next.data).to.eql(3)
    expect(this.list.head.next.next.next.data).to.eql(5)
    expect(this.list.head.next.next.next.next).to.eql(null)
  })
})
