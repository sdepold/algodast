var expect = require('expect.js')
  , path   = require('path')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-3-6'))
  , Stack  = require(path.resolve(__dirname, '..', 'src', 'chapter-3-0')).Stack

describe('chapter-3-6', function() {
  beforeEach(function() {
    this.stack = new Stack()
    this.stack.push(2)
    this.stack.push(1)
    this.stack.push(3)
    this.stack.push(4)
    this.stack.push(10)
    this.stack.push(6)
    this.stack.push(5)
  })

  it('works correctly', function() {
    var sortedStack = fun(this.stack)

    expect(sortedStack.pop().data).to.eql(1)
    expect(sortedStack.pop().data).to.eql(2)
    expect(sortedStack.pop().data).to.eql(3)
    expect(sortedStack.pop().data).to.eql(4)
    expect(sortedStack.pop().data).to.eql(5)
    expect(sortedStack.pop().data).to.eql(6)
    expect(sortedStack.pop().data).to.eql(10)
    expect(sortedStack.pop()).to.eql(null)
  })
})
