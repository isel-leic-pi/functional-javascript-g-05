module.exports = function Spy(target, method) {
    const fun = target[method]
    const result = {
        count: 0
    }

    target[method] = function() {
        result.count++
        return fun.apply(this, arguments)
    }
    return result
}