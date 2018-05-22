module.exports = function (str) {
    return /^[A-zÀ-ÿ0-9\-\.,\\?¿!¡]+( [A-zÀ-ÿ0-9\-\.,\\?¿!¡]+)*$/.test(str);
}
