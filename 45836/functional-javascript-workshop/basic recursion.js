function reduce(array, fun, initial) {
    return (function reduceOneElement(index, currentValue) {
        if (index > array.length - 1)
            return currentValue
        return reduceOneElement(index + 1, fun(currentValue, array[index], index, array))
    })(0, initial)
}
module.exports = reduce


