module.exports = function(node) {
  node.data = node.next.data
  node.next = node.next.next
}
