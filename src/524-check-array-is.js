/**
 * @param {number[]} nums
 * @returns {boolean}
 */
const isGood = nums => {
    const n = nums.length;
    const freq = new Array(n).fill(0);

    for (const num of nums) {
        // we must have freq 1 for all numbers from 1 to n - 2 and 2 for n - 1
        // so no 0 and no number outside 1 -> n - 1
        if (
            num === 0 ||
            freq[num] === undefined ||
            (freq[num] === 1 && num !== n - 1) ||
            (freq[num] === 2 && num === n - 1)
        ) {
            return false;
        }
        freq[num]++;
    }

    return true;
};

module.exports = { isGood };

console.log(isGood([0, 2, 3, 3]));
