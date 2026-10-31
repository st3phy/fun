/**
 * @param {number[]} nums
 * @returns {number}
 */
const unequalTriplets = nums => {
    const freq = new Map();
    const n = nums.length;
    let count = 0;

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // We have zero elements on the left of first number
    let left = 0;
    for (const f of freq.values()) {
        // All elements different from current number, on the right of current number
        const right = n - left - f;
        count += left * f * right;

        // Update elements on the left for next number
        left += f;
    }

    return count;
};

module.exports = { unequalTriplets };

console.log(unequalTriplets([4, 4, 2, 4, 3])); // 7
