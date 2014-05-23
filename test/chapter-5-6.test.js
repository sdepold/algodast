var path   = require('path')
  , expect = require('expect.js')
  , fun    = require(path.resolve(__dirname, '..', 'src', 'chapter-5-6.js'))

describe('Chapter 5.6', function() {
  var tests = {
    '10101010101010101010101010101010': '01010101010101010101010101010101',
    '01': '10',
    '11': '11',
    '101': '1010'
  }

  Object.keys(tests).forEach(function(input) {
    var output = tests[input]

    xit("swaps transforms " + input + " into " + output, function() {
      var _input  = parseInt(input, 2)
        , _output = parseInt(output, 2)

      console.log()
      console.log("expect", _input, "("+input+")","to become", _output, "("+output+")", "got", fun(_input).toString(2), "("+fun(_input)+")")

      expect(fun(_input)).to.eql(_output)
    })
  })
})
