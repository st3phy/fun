/**
 * @param {number[]} arr
 * @returns {number[]}
 */
const replaceElements = arr => {
    const res = [];

    // Assume last element as biggest one
    let max = -1;

    // Cross array from right to left
    for (let i = arr.length - 1; i >= 0; i--) {
        // Add max value for current number to the res array
        res[i] = max;

        // If current element is bigger than max, store new max
        max = Math.max(max, arr[i]);
    }

    return res;
};

module.exports = { replaceElements };

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
