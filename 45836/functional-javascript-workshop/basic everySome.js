module.exports = function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        //he every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
        return submittedUsers.every(function(submittedUser) {
            //The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
            return goodUsers.some(function(goodUser) {
                return goodUser.id === submittedUser.id
            })
        })
    }
}
