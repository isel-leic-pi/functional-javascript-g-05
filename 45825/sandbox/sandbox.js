'use strict'

const fs = require('fs')

const files = [
    'The-Wizard-by-Rider-Haggard.txt',
    'Metamorphosis-by-Franz-Kafka.txt',
    'The-History-of-Tom-Thumb-and-Others.txt'
]


function fileSize(path) {
    console.log('Reading ' + path)
    fs.readFile(path, (err, buffer) => {
        if(err) {
            console.log(err)
            return
        }
        return buffer.toString().length //errado nao se retorna em assync
    })
}

function sumFilesSize(paths){
    const reducer = (accumulator, currentValue) => accumulator + fileSize(currentValue);
    console.log(files.reduce((accumulator, currentValue) => accumulator + fileSize(currentValue)))

}

sumFilesSize(files)


