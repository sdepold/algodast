var expect      = require('expect.js')
  , path        = require('path')
  , SetOfStacks = require(path.resolve(__dirname, '..', 'src', 'chapter-3-3'))

describe('chapter-3-3', function() {
  beforeEach(function() {
    this.set = new SetOfStacks(2)
  })

  it('pushes the first element to the first stack', function() {
    this.set.push(1)
    expect(this.set.lengthOf(this.set.set)).to.eql(1)
    expect(this.set.lengthOf(this.set.set.top.data)).to.eql(1)
  })

  it('pushes the third element to the second stack', function() {
    this.set.push(1)
    this.set.push(2)
    this.set.push(3)

    expect(this.set.lengthOf(this.set.set)).to.eql(2)
    expect(this.set.lengthOf(this.set.set.top.data)).to.eql(1)
    expect(this.set.lengthOf(this.set.set.top.next.data)).to.eql(2)
  })

  it('removes an empty stack', function() {
    this.set.push(1)
    this.set.push(2)
    this.set.push(3)
    expect(this.set.lengthOf(this.set.set)).to.eql(2)
    expect(this.set.pop().data).to.eql(3)
    expect(this.set.lengthOf(this.set.set)).to.eql(1)
    expect(this.set.pop().data).to.eql(2)
    expect(this.set.pop().data).to.eql(1)
    expect(this.set.lengthOf(this.set.set)).to.eql(0)
  })

  it('pops from a specific stack', function() {
    this.set.push(1) // stack: 2
    this.set.push(2) // stack: 2
    this.set.push(3) // stack: 1
    this.set.push(4) // stack: 1
    this.set.push(5) // stack: 0

    expect(function() {
      this.set.popAt(10)
    }).to.throwError()

    expect(this.set.lengthOf(this.set.set)).to.eql(3)
    expect(this.set.popAt(1).data).to.eql(4)
    expect(this.set.lengthOf(this.set.set)).to.eql(3)
    expect(this.set.popAt(1).data).to.eql(3)
    expect(this.set.lengthOf(this.set.set)).to.eql(2)
    expect(this.set.popAt(0).data).to.eql(5)
    expect(this.set.lengthOf(this.set.set)).to.eql(1)
    expect(this.set.popAt(0).data).to.eql(2)
    expect(this.set.lengthOf(this.set.set)).to.eql(1)
    expect(this.set.popAt(0).data).to.eql(1)
    expect(this.set.lengthOf(this.set.set)).to.eql(0)
  })
})
