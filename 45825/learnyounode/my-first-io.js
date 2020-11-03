'use strict'
const fs = require('fs')
const buffer = fs.readFileSync(process.argv[2])
const str = buffer.toString()
console.log(str.split('\n').length - 1)

/*
SOLUÇAO DADA

'use strict'
    const fs = require('fs')

    const contents = fs.readFileSync(process.argv[2])
    const lines = contents.toString().split('\n').length - 1
    console.log(lines)
*/