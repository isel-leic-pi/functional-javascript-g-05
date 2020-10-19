function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(elem => goodUsers.includes(elem))
    };
}

module.exports = checkUsersValid