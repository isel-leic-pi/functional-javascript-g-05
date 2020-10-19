const slice = Array.prototype.slice

function logger(namespace) {
    return function() {
        // The apply() method calls a function with a given this value, and arguments provided as an array
        console.log.apply(null, [namespace].concat(slice.call(arguments)))
    }
}

module.exports = logger
