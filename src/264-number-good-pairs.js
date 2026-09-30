/**
 * @param {number[]} nums
 * @returns {number}
 */
const numIdenticalPairs = nums => {
    const count = new Map();
    let pairs = 0;

    for (const num of nums) {
        const seen = count.get(num) || 0;

        // Every previously seen occurrence of num forms a new pair with this occurrence
        pairs += seen;

        count.set(num, seen + 1);
    }

    return pairs;
};

module.exports = { numIdenticalPairs };

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
