/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = nums => {
    let longest = 0;
    const map = new Map();

    // Count how many times each number appears
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Go through each number is map and see if it has a pair
    map.forEach((value, key) => {
        if (map.has(key - 1)) {
            // If it does, compute how many times each value appears and check if it is longer than previously longest subsequence
            longest = Math.max(longest, value + map.get(key - 1));
        }
    });

    return longest;
};

module.exports = { findLHS };

console.log(findLHS([1, 0, 3, 2, 2, 5, 2, 3]));
