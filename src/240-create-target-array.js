/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = (nums, index) => {
    let res = [];
    for (let i = 0; i < index.length; i++) {
        res.splice(index[i], 0, nums[i]); // Insert at index[i], delete 0 elements
    }

    return res;
};

module.exports = { createTargetArray };

console.log(createTargetArray([4, 2, 4, 3, 2], [0, 0, 1, 3, 1]));
