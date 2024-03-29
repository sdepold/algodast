var fs        = require('fs')
  , path      = require('path')

module.exports = {}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function(file) {
    module.exports[file.replace('.js', '')] = require(path.join(__dirname, file))
  })
