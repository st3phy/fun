/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
const getLucky = (s, k) => {
    let digits = "";

    for (const ch of s) {
        digits = digits + (ch.charCodeAt(0) - 96);
    }

    let sum;
    let arr = [...digits];

    while (k > 0) {
        sum = arr.reduce((acc, d) => {
            return acc + Number(d);
        }, 0);
        arr = [...("" + sum)];
        k--;
    }

    return sum;
};

module.exports = { getLucky };

console.log(getLucky("zbax", 2));
