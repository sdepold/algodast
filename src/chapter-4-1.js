/*
  Implement a function to check if a tree is balanced. For the purposes of
  this question, a balanced tree is defined to be a tree such that no two
  leaf nodes differ in distance from the root by more than one.
*/

module.exports = function(tree) {
  return (tree.maxDepth() - tree.minDepth()) <= 1
}
