function repeat(operation, num) {
    return function() {
        if (num <= 0) return
        operation()
        return repeat(operation, --num)
    }
}

function trampoline(fun) {
    while(fun && typeof fun === 'function') {
        fun = fun()
    }
}

module.exports = function(operation, num) {
    trampoline(function() {
        return repeat(operation, num)
    })
}