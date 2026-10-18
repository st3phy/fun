/**
 * @param {number[]} nums
 * @returns {number}
 */
const minDeletion = nums => {
    let count = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) {
            count++;
        }
    }

    return count;
};

module.exports = { minDeletion };

console.log(minDeletion([1, 1, 2, 2, 2, 3]));
