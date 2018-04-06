module.exports = function (str) {
    return /^[A-zÀ-ÿ]+( [A-zÀ-ÿ]+)*$/.test(str);
}
