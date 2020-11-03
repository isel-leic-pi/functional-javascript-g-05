
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const extension = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
    if (err) return
        console.error(err)
    files.forEach(function (file) {
        if (path.extname(file) === extension) {
            console.log(file)
        }
    })
})
