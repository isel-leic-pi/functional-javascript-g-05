function getDependencies(mod, result) {
    result = result || []
    const dependencies = mod && mod.dependencies || []
    //The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
    Object.keys(dependencies).forEach(function(dep) {
        const key = dep + '@' + mod.dependencies[dep].version
        // === equal value and equal type
        if (result.indexOf(key) === -1)
            result.push(key)
        getDependencies(mod.dependencies[dep], result)
    })
    //The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
    return result.sort()
}

module.exports = getDependencies
