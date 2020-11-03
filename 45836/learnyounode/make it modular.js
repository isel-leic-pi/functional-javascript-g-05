const filterFun = require('./my module.js')
const dir = process.argv[2]
const filterExt = process.argv[3]

filterFun(dir, filterExt, function (err, list) {
    if (err) {
        return console.error(err)
    }

    list.forEach(function (file) {
        console.log(file)
    })
})
