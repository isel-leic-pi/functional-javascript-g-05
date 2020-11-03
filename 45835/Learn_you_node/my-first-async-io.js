'use strict'
const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  console.log(contents.toString().split('\n').length - 1)
})
