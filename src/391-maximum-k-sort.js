/**
 * @param {number[]} nums
 * @returns {number}
 */
const sortPermutation = nums => {
    // In two's complement, -1 is all ones (11111111 11111111 11111111 11111111)
    let k = -1;
    let isSorted = true;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            isSorted = false;

            // every swap involves x & y === k, so every bit of k must be set in every element that ever moves
            k &= nums[i];
        }
    }

    return isSorted ? 0 : k;
};

module.exports = { sortPermutation };

console.log(sortPermutation([0, 1, 3, 2]));
