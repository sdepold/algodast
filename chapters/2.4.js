var expect = require('expect.js')
  , dataTypes = require(__dirname + "/../data-types")

var fun = function(list1, list2) {
  var result = new dataTypes['singly-linked-list']

  var node1 = list1.head
    , node2 = list2.head
    , tmp   = 0
    , add   = 0

  while (node1 || node2) {
    tmp = 0

    if (node1.data) tmp = tmp + node1.data
    if (node2.data) tmp = tmp + node2.data

    tmp = tmp + add

    if (tmp > 9) {
      add = 1
      tmp = tmp % 10
    } else {
      add = 0
    }

    result.add(tmp)

    node1 = node1 && node1.next
    node2 = node2 && node2.next
  }

  return result
}

describe('fun', function() {
  it("returns 8,0,8", function() {
    var input1 = new dataTypes['singly-linked-list']
      , input2 = new dataTypes['singly-linked-list']

    input1.add(3)
    input1.add(1)
    input1.add(5)

    input2.add(5)
    input2.add(9)
    input2.add(2)

    expect(fun(input1, input2).toArray()).to.eql([8,0,8])
  })
})
