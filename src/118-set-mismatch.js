/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = nums => {
    const res = [];

    // Use each value as an index and mark the corresponding position as visited
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        // If a position is already marked, we've found the duplicate number
        if (nums[index] < 0) {
            res.push(index + 1);
        }
        // Mark this number as visited by negating the value at its index
        else {
            nums[index] *= -1;
        }
    }

    // The index whose value remains positive was never visited, so its corresponding number is missing
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i + 1);
        }
    }

    return res;
};

module.exports = { findErrorNums };

console.log(findErrorNums([3, 2, 2]));
