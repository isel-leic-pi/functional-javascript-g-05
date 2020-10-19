function curryN(fun, n) {
    n = n || fun.length
    return function curriedN(arg) {
        if (n <= 1) return fun(arg)
        return curryN(fun.bind(this, arg), n - 1)
    }
}

module.exports = curryN
