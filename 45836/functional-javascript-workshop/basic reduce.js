function countWords(inputWords) {
    //The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
    return inputWords.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1
        return countMap
    },{})
}
module.exports = countWords