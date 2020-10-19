module.exports = function (operation, num){
    for (let i = 0; i < num; i++) {
        operation()
    }
}
