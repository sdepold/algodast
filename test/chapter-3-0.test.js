var expect = require('expect.js')
  , path   = require('path')
  , Stack  = require(path.resolve(__dirname, '..', 'src', 'chapter-3-0')).Stack
  , Queue  = require(path.resolve(__dirname, '..', 'src', 'chapter-3-0')).Queue

describe('Stack', function() {
  beforeEach(function() {
    this.stack = new Stack()
    this.stack.push(1)
    this.stack.push(2)
    this.stack.push(3)
  })

  it('correctly adds elements', function() {
    expect(this.stack.top.data).to.eql(3)
    expect(this.stack.top.next.data).to.eql(2)
    expect(this.stack.top.next.next.data).to.eql(1)
  })

  it('correctly removes elements', function() {
    expect(this.stack.pop().data).to.eql(3)
    expect(this.stack.pop().data).to.eql(2)
    expect(this.stack.pop().data).to.eql(1)
    expect(this.stack.pop()).to.eql(null)
  })
})

describe('Queue', function() {
  beforeEach(function() {
    this.queue = new Queue()
    this.queue.enqueue(1)
    this.queue.enqueue(2)
    this.queue.enqueue(3)
  })

  it('correctly adds elements', function() {
    expect(this.queue.head.data).to.eql(1)
    expect(this.queue.head.next.data).to.eql(2)
    expect(this.queue.head.next.next.data).to.eql(3)
    expect(this.queue.tail.data).to.eql(3)
  })

  it('correctly removes elements', function() {
    expect(this.queue.dequeue().data).to.eql(1)
    expect(this.queue.dequeue().data).to.eql(2)
    expect(this.queue.dequeue().data).to.eql(3)
    expect(this.queue.dequeue()).to.eql(null)
  })
})
