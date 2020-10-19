module.exports = function getShortMessages(messages) {
    //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    const objsMessages = messages.map(function(obj) {
        return obj.message
    })
    // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    return objsMessages.filter(function(obj) {
        return obj.length < 50
    })
}
