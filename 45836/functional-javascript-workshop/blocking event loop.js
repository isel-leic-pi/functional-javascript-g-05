function repeat(operation, num) {
    if (num <= 0) return

    operation()

    if (num % 10 === 0) {
        //The setTimeout(), calls a function or executes a code snippet after specified delay.
        setTimeout(function() {
            repeat(operation, --num)
        })
    } else {
        repeat(operation, --num)
    }
}
module.exports = repeat