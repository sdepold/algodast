var path   = require('path')
  , expect = require('expect.js')
  , funs   = require(path.resolve(__dirname, '..', 'src', 'chapter-5-3.js'))

describe('Chapter 5.3', function() {
  describe("next", function() {
    xit("returns the next number", function() {
      expect(funs.next(parseInt('1110', 2))).to.eql(parseInt('10111', 2))
      expect(funs.next(parseInt('1101', 2))).to.eql(parseInt('1110', 2))
    })
  })

  describe("prev", function() {
    xit("returns the previous number for 1110", function() {
      expect(funs.prev(parseInt('1110', 2))).to.eql(parseInt('1101', 2))
    })

    xit("returns the previous number for 11001", function() {
      expect(funs.prev(parseInt('11001', 2))).to.eql(parseInt('1110', 2))
    })

    xit("returns the previous number for 10101", function() {
      expect(funs.prev(parseInt('10101', 2))).to.eql(parseInt('1110', 2))
    })

    xit("throws an error if there is no smaller number", function() {
      expect(function() {
        funs.prev(parseInt("111", 2))
      }).to.throwError()
    })
  })
})
