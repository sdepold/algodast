var File = function(name, content, parent) {
  this.parent  = parent
  this.name    = name
  this.content = content
}

var Directory = function(name, parent) {
  this.parent = parent
  this.name   = name
  this.items  = []
}

Directory.prototype.add = function(item) {
  item.parent = this
  this.items.push(item)
}

Directory.prototype.get = function(name) {
  return this.items.filter(function(item) {
    return item.name === name
  })[0]
}

Directory.prototype.print = function() {
  if (this.items.length === 0) {
    console.log('-')
  } else {
    this.items.forEach(function(item) {
      var prefix = (item instanceof Directory) ? 'dir ' : 'file'
      console.log(prefix, item.name)
    })
  }
}

var createFileSystem = function() {
  return new Directory('/')
}

module.exports = {
  createFileSystem: createFileSystem,
  Directory:  Directory,
  File:       File
}
