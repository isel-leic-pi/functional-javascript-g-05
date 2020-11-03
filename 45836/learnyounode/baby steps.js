const args = process.argv.slice(2);
let res = args.reduce(function (acum, curr){
    return parseInt(acum) + parseInt(curr)
})

console.log(res)
