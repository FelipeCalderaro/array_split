module.exports = (array, n) => {
    var newArray = []
    if (array.length > 0 && array.length > n) {
        var betweenNumbers = parseInt((array.length / n).toFixed(0))
        var space = betweenNumbers
        for (var i = 0; i < n; i++) {
            if (i === n - 1) {
                newArray.push(array.slice(betweenNumbers, array.length))
            } else if (i === 0) {
                newArray.push(array.slice(0, betweenNumbers))
            } else {
                newArray.push(array.slice(betweenNumbers, betweenNumbers + space))
                betweenNumbers += space
            }
        }
        console.log(newArray)
        return newArray
    } else {
        if (array.lenght < 1) {
            throw 'The array length must be greater than zero'
        } else {
            throw 'The number of requested arrays to split cannot be greater them the array itself'
        }
    }
}