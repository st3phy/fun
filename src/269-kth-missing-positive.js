/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
const findKthPositive = (arr, k) => {
    // For every positive array, determine how many numbers are missing before it
    for (let i = 0; i < arr.length; i++) {
        const missing = arr[i] - 1 - i;

        // The missing number is between current number and previous one
        if (missing >= k) {
            // We've already encountered i set numbers, so move forward by i
            return k + i;
        }
    }

    // K-th mising number is after end of arr
    return k + arr.length;
};

module.exports = { findKthPositive };

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
