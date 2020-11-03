'use strict'

console.log(process.argv
    .filter(element => parseInt(element) == element) //array fica so com numeros
    .reduce((total,elem) => total + Number(elem),0)) //reduce para acumular a soma de todos os elems


/*1ST attempt
let a = process.argv.filter(element => parseInt(element) == element)
let total = a.reduce((total,elem) => total + Number(elem),0)
console.log(total)
*/
/*
SOLUÇAO DADA
'use strict'

    let result = 0

    for (let i = 2; i < process.argv.length; i++) {
      result += Number(process.argv[i])
    }

    console.log(result)*/