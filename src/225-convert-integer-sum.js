/**
 * @param {number} n
 * @returns {number[]}
 */
const getNoZeroIntegers = n => {
    let a = 1;
    let b = n - a;

    // check if a or b contains zeroes
    while (b.toString().includes("0") || a.toString().includes("0")) {
        a++;
        b--;
    }

    return [a, b];
};

module.exports = { getNoZeroIntegers };

console.log(getNoZeroIntegers(2079));
