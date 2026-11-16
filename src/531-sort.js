/**
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Array}
 */
const sortBy = (arr, fn) => {
    return arr.sort((a, b) => fn(a) - fn(b));
};

module.exports = { sortBy };

console.log(
    sortBy(
        [
            [3, 4],
            [5, 2],
            [10, 1]
        ],
        x => x[1]
    )
);
