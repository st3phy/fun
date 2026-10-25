/**
 * @param {number[]} nums
 * @returns {boolean}
 */
const divideArray = nums => {
    // We need every element to appear an even number of times
    const set = new Set();

    // Use a set to toggle each number's appearance
    for (const num of nums) {
        if (set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    }

    // If all numbers appear an even number of times, the set should be empty by the end
    return set.size === 0;
};

module.exports = { divideArray };

console.log(
    divideArray([
        18, 19, 5, 5, 18, 19, 5, 6, 12, 19, 13, 4, 16, 11, 4, 16, 10, 8, 12, 8, 2, 1, 8, 17, 4, 18, 3, 5, 16, 2, 16, 12,
        17, 16, 7, 16, 2, 17, 19, 9, 1, 20, 17, 17, 4, 6
    ])
);
