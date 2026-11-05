/**
 * @param {number[]} arr
 * @param {Function} fn
 * @returns {number[]}
 */
const map = (arr, fn) => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i], i));
    }

    return res;
};

module.exports = { map };

console.log(
    map([1, 2, 3], function plusI(n, i) {
        return n + i;
    })
);
