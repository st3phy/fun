/**
 * Finds number of set bits for a number
 *
 * @param {number} n
 * @returns {number}
 */
const countBits = n => {
    let count = 0;
    while (n > 0) {
        // Clear the rightmost set bit (eg: for n = 8 we get 1000 & 0111)
        n = n & (n - 1);
        count++;
    }
    return count;
};

/**
 * Sorts integers by the number of 1 bits
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
const sortByBits = arr => {
    // Map number of bits to every number in array
    arr = arr.map(val => ({ val, bits: countBits(val) }));
    // Sort array by set bits or by value if number of bits is the same, ascending
    arr.sort((a, b) => a.bits - b.bits || a.val - b.val);

    return arr.map(({ val }) => val);
};

module.exports = { sortByBits };

console.log(sortByBits([1111, 7644, 1107, 6978, 8742, 1, 7403, 7694, 9193, 4401, 377, 8641, 5311, 624, 3554, 6631]));
