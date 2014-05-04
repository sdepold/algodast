var expect = require('expect.js')
  , path   = require('path')
  , Stack  = require(path.resolve(__dirname, '..', 'src', 'chapter-3-0')).Stack
  , Queue  = require(path.resolve(__dirname, '..', 'src', 'chapter-3-0')).Queue
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-3-2'))

describe('chapter-3-2', function() {
  beforeEach(function() {
    this.stack = new Stack()
    this.stack.push(2)
    this.stack.push(1)
    this.stack.push(3)
  })

  it('correctly finds the minimal element', function() {
    expect(fun(this.stack).data).to.eql(1)
  })
})
