function divmod (a, b) {
    var div = parseInt(a / b)
    var rest = a % b
    return [div, rest]
};

module.exports = (array, n) => {
    // Verification 
    // array only accepts single Array
    if (!Array.isArray(array)) {
        throw Error("'array' needs to be a Array type")
    }

    // n only accepts integer numbers
    if (!Number.isInteger(n)) {
        throw Error("'n' has to be an Integer Number")
    }


    // Create the new splited array
    var newArray = []
    var markDownArray = [0]

    // verify if length and 'n' size is greater then length
    // which can't be
    if (array.length > 0 && array.length >= n) {

        // calculate div mod
        var [number_each_section, extras] = divmod(array.length, n)
        // generate markdown array
        for (var i = 0; i < extras; i++) {
            markDownArray.push(number_each_section + 1)
        }

        for (var i = 0; i < (n - extras); i++) {
            markDownArray.push(number_each_section)
        }


        const accumulate = arr => arr.map((sum => value => sum += value)(0))
        var points = accumulate(markDownArray)
        // create subarrays
        for (var i = 0; i < n; i++) {
            var st = points[i]
            var end = points[i + 1]
            newArray.push(array.slice(st, end))
        }


        // return the newly created array
        return newArray


    } else {
        // throw errors 
        if (array.lenght < 1) {
            // error if the length is null 
            throw Error('The array length must be greater than zero')
        } else {
            // error if the size is greater them the length
            throw Error('The number of requested arrays to split cannot be greater them the array itself')
        }
    }
}