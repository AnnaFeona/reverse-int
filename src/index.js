module.exports = function reverse (n) {
    let result = '';
    let tmp = '' + Math.abs(n);
    for (let i= tmp.length - 1; i >= 0; i--) {
        result += tmp[i];
    }
    return +result;
}