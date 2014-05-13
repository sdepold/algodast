var path = require('path')
  , Tree = require(path.resolve(__dirname, '..', 'src', 'chapter-4-0')).BinTree

var transformIntoBinTree = module.exports = function(arr) {
  var index = ~~(arr.length / 2)
    , value = arr[index]

  if (typeof value === 'undefined') {
    return null
  } else {
    var node  = Tree.createNode(value)
    node.left  = transformIntoBinTree(arr.slice(0, index))
    node.right = transformIntoBinTree(arr.slice(index + 1, arr.length))
    return node
  }
}
