var expect = require('expect.js')
  , dataTypes = require(__dirname + "/../data-types")

var fun = function(tree, n1, n2, scope) {

  if (typeof scope === 'undefined') {
    return fun(tree, n1, n2, tree.root)
  }

  if (scope === null) {
    return null
  }

  if ((scope.left === n1) || (scope.left === n2) || (scope.right === n1) || (scope.right === n2)) {
    return scope
  }

  var leftParent = fun(tree, n1, n2, scope.left)
  var rightParent = fun(tree, n1, n2, scope.right)


  if (leftParent && ((leftParent.left === n1) || (leftParent.left === n2)) && ((leftParent.right === n1) || (leftParent.right === n2))) {
    return leftParent
  }

  if (rightParent && ((rightParent.left === n1) || (rightParent.left === n2)) && ((rightParent.right === n1) || (rightParent.right === n2))) {
    return rightParent
  }

  if (leftParent && ([leftParent.left, leftParent.right].indexOf(n1) > -1)) {
    return fun(tree, leftParent, n2)
  }

  if (leftParent && ([leftParent.left, leftParent.right].indexOf(n2) > -1)) {
    return fun(tree, n1, leftParent)
  }

  if (rightParent && ([rightParent.left, rightParent.right].indexOf(n1) > -1)) {
    return fun(tree, rightParent, n2)
  }

  if (rightParent && ([rightParent.left, rightParent.right].indexOf(n2) > -1)) {
    return fun(tree, n1, rightParent)
  }
}

describe('fun', function() {
  it("works", function() {
    var tree = new dataTypes['binary-search-tree']

    tree.add(4)
    tree.add(2)
    var parent = tree.add(6)
    tree.add(1)
    tree.add(3)
    var node1 = tree.add(5)
    var node2 = tree.add(7)

    expect(fun(tree, node1, node2).data).to.eql(parent.data)
  })
})
