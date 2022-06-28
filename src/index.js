module.exports = function reverse (n) {
    let string = String(n);
    let stringReverse = string.split('').reverse().join('');
    if (stringReverse.startsWith('0')) {
            return stringReverse.slice(1);
        } else if (stringReverse.endsWith('-')) {
            return stringReverse.slice(0, stringReverse.length-1);
        } else {
            return stringReverse;
        }
}
