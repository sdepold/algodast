var expect = require('expect.js')
  , path   = require('path')
  , SLL    = require(path.resolve(__dirname, '..', 'src', 'chapter-2-0'))
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-2-2'))

describe('chapter-2-2', function() {
  beforeEach(function() {
    this.list = new SLL()
    this.list.push(1)
    this.list.push(2)
    this.list.push(3)
    this.list.push(2)
    this.list.push(5)
  })

  it("finds the 2nd last element", function() {
    expect(fun(this.list, 2).data).to.eql(2)
  })

  it("finds the 1st last element", function() {
    expect(fun(this.list, 1).data).to.eql(5)
  })
})
