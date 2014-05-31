var Stack = module.exports = function() {
  this.tail = null
  this._min  = null
}

Stack.createNode = function(data) {
  return { data: data, prev: null }
}

Stack.prototype.push = function(data) {
  var node = Stack.createNode(data)

  if (this.tail === null) {
     this.tail = node
  } else {
    node.prev = this.tail
    this.tail = node
  }

  if (!this._min || (this._min > node.data)) {
    this._min = node.data
  }

  return node
}

Stack.prototype.pop = function() {
  var node = this.tail
  var tmp  = this.tail = this.tail.prev
  this._min = null

  while(tmp) {
    if (!this._min || (this._min > tmp.data)) {
      this._min = tmp.data
    }
    tmp = tmp.prev
  }

  return node
}

Stack.prototype.min = function() {
  return this._min
}

Stack.prototype.peek = function() {
  return this.tail
}

Stack.prototype.isEmpty = function() {
  return this.tail === null
}

Stack.prototype.toArray = function() {
  var result = []
    , node   = this.tail

  while (node) {
    result.push(node.data)
    node = node.prev
  }

  return result
}
