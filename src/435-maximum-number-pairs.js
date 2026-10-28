/**
 * @param {number[]} nums
 * @return {number[]}
 */
const numberOfPairs = nums => {
    let sum = 0;
    const set = new Set();

    // Remove a number when we find its matching occurrence
    for (const num of nums) {
        if (set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    }

    return [(nums.length - set.size) / 2, set.size];
};

module.exports = { numberOfPairs };
