/**
 * @param {number} nums
 * @returns {number}
 */
const sumOfUnique = nums => {
    let sum = 0;
    const freq = new Map();

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (const [num, f] of freq) {
        if (f === 1) sum += num;
    }

    return sum;
};

module.exports = { sumOfUnique };

console.log(sumOfUnique([1, 2, 3, 2]));
