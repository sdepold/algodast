var path      = require('path')
  , fsModules = require(path.resolve(__dirname, '..', 'src', 'chapter-7-9'))
  , Directory = fsModules.Directory
  , File      = fsModules.File

var fs = fsModules.createFileSystem()

fs.add(new Directory('home'))
fs.add(new File('noot.txt', 'omgomgomg'))
fs.get('home').add(new File('nested.txt', 'ok cool'))
