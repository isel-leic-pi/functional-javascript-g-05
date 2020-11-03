const fs = require('fs')
const path = require('path')

module.exports = function (dir, filterExt, cb) {
    fs.readdir(dir, function (err, list) {
        if (err) {
            return cb(err)
        }

        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterExt
        })

        cb(null, list)
    })
}
