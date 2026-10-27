/**
 * @param {number[]} nums
 * @returns {number}
 */
const minMaxGame = nums => {
    if (nums.length === 1) return nums[0];

    const arr = [];
    for (let i = 0; i < nums.length / 2; i++) {
        if (i % 2 === 0) {
            arr[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
        } else {
            arr[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
        }
    }

    return minMaxGame(arr);
};

module.exports = { minMaxGame };

console.log(minMaxGame([70, 38, 21, 22]));
