/**
 * @param {number[]} nums
 * @param {number} diff
 * @returns {number}
 */
const arithmeticTriplets = (nums, diff) => {
    const set = new Set(nums);
    let count = 0;

    // For each num, check if the other 2 required values exist in set - they are already sorted strictly asc
    for (const num of nums) {
        if (set.has(num + diff) && set.has(num + diff * 2)) count++;
    }

    return count;
};

module.exports = { arithmeticTriplets };

console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2));
