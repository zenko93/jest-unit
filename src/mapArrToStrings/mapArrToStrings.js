const mapArrToStrings = (arr) => {
    return arr
        .filter(item => Number.isInteger(item))
        .map(num => num.toString())
}

module.exports = mapArrToStrings;