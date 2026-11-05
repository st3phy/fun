/**
 * @param {Array} arr
 * @param {number} size
 * @returns {Array}
 */
const chunk = (arr, size) => {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }

    return res;
};

module.exports = { chunk };

console.log(chunk([1, 9, 6, 3, 2], 3));
