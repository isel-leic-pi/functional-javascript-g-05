'use strict'
const fs = require('fs')
const path = process.argv[2]
const type = process.argv[3]

console.log(path)
const buffer = fs.readdir(path,function cb(err,list){
    if(err) return console.log(err)
    let listReduced = list.filter(elem => elem.split('.').pop() == type)
    console.log(list)   
})


/*

SOLUÇAO DADA


*/