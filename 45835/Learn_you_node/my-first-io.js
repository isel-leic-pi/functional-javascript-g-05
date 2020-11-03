const fs = require('fs')
const args_num = process.argv
const arr = fs.readFileSync(args_num[2]).toString().split("\n")
console.log(arr.length - 1)