var expect = require('expect.js')
  , path   = require('path')
  , SLL    = require(path.resolve(__dirname, '..', 'src', 'chapter-2-0'))

describe('chapter-2-0', function() {
  describe('singly linked lists', function() {
    beforeEach(function() {
      this.list = new SLL()
    })

    it('sets the head and the tail to null by default', function() {
      expect(this.list.head).to.eql(null)
      expect(this.list.tail).to.eql(null)
    })

    it('correctly pushes', function() {
      this.list.push(1)
      this.list.push(2)
      this.list.push(3)
      expect(this.list.head.data).to.eql(1)
      expect(this.list.head.next.data).to.eql(2)
      expect(this.list.head.next.next.data).to.eql(3)
      expect(this.list.head.next.next.next).to.eql(null)
    })

    it('correctly unshifts', function() {
      this.list.push(1)
      expect(this.list.head.data).to.eql(1)
      expect(this.list.head.next).to.eql(null)
      this.list.unshift(2)
      expect(this.list.head.data).to.eql(2)
      expect(this.list.head.next.data).to.eql(1)
      expect(this.list.head.next.next).to.eql(null)
    })

    it('correctly removes', function() {
      this.list.push(1)
      this.list.push(2)
      this.list.push(3)
      this.list.remove(2)

      expect(this.list.head.data).to.eql(1)
      expect(this.list.head.next.data).to.eql(3)
      expect(this.list.head.next.next).to.eql(null)

      this.list.remove(1)
      expect(this.list.head.data).to.eql(3)
      expect(this.list.head.next).to.eql(null)
    })

    it('correctly inserts', function() {
      this.list.push(1)
      this.list.insert(1, 2)
      this.list.insert(1, 3)

      expect(this.list.head.data).to.eql(1)
      expect(this.list.head.next.data).to.eql(3)
      expect(this.list.head.next.next.data).to.eql(2)
      expect(this.list.head.next.next.next).to.eql(null)
    })

    it('correctly indexes', function() {
      this.list.push(1)
      this.list.push(2)
      this.list.push(3)

      expect(this.list.at(0).data).to.eql(1)
      expect(this.list.at(1).data).to.eql(2)
      expect(this.list.at(2).data).to.eql(3)
      expect(this.list.at(3)).to.eql(null)
    })

    it('correctly calls the function for each item', function() {
      var sum = 0

      this.list.push(1)
      this.list.push(2)
      this.list.push(3)

      this.list.each(function(node) {
        sum += node.data
      })

      expect(sum).to.eql(6)
    })
  })
})
