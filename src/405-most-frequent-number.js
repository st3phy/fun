/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
const mostFrequent = (nums, key) => {
    const occ = new Map();
    let max = 0;
    let num;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === key) {
            const numOfOcc = (occ.get(nums[i]) || 0) + 1;
            occ.set(nums[i], numOfOcc);
            if (numOfOcc > max) {
                max = numOfOcc;
                num = nums[i];
            }
        }
    }

    return num;
};

module.exports = { mostFrequent };

console.log(mostFrequent([1, 100, 200, 1, 100], 1));
