module.exports = function arrayMap(array, fun) {
    // The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
    return array.reduce(function(accum, curr, index, array) {
        //The push() method adds one or more elements to the end of an array and returns the new length of the array.
        //The call() method calls a method of an object, substituting another object for the current object.
        //[] initial array is empty
        accum.push(fun.call(this, curr, index, array))
        return accum
    },[])
}
