var expect  = require('expect.js')
  , path    = require('path')
  , MyQueue = require(path.resolve(__dirname, '..', 'src', 'chapter-3-5'))

describe('MyQueue', function() {
  beforeEach(function() {
    this.queue = new MyQueue()
    this.queue.enqueue(1)
    this.queue.enqueue(2)
    this.queue.enqueue(3)
  })

  it('works correctly', function() {
    expect(this.queue.dequeue().data).to.eql(1)
    expect(this.queue.dequeue().data).to.eql(2)
    expect(this.queue.dequeue().data).to.eql(3)
    expect(this.queue.dequeue()).to.eql(null)
  })
})
