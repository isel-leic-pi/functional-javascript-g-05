function duckCount() {
    // arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
    const args = Array.prototype.slice.call(arguments)

    return args.filter(obj => Object.prototype.hasOwnProperty.call(obj, 'quack')).length
}

module.exports = duckCount
