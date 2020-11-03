const fs = require('fs')
const filePath = process.argv[2]

fs.readFile(filePath, 'utf8', function cb (err, buffer) {
    if (err) {
        return console.log(err)
    }
    const newLines = buffer.split('\n').length - 1
    console.log(newLines)
})
