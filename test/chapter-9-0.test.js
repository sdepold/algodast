var path   = require('path')
  , expect = require('expect.js')
  , funs   = require(path.resolve(__dirname, '..', 'src', 'chapter-9-0.js'))

describe('Chapter 9.0', function() {
  Object.keys(funs).forEach(function(name) {
    var fun = funs[name]
    describe(name, function() {
      it("sorts correctly", function() {
        var arr = [5,3,7,4,6,2,9,8,1]
        expect(fun(arr)).to.eql([1,2,3,4,5,6,7,8,9])
      })
    })
  })
})
