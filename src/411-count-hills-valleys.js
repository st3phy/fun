/**
 * @param {number[]} nums
 * @returns {number}
 */
const countHillValley = nums => {
    let count = 0;
    let unique = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            unique.push(nums[i]);
        }
    }

    for (let i = 1; i < unique.length - 1; i++) {
        if (
            (unique[i - 1] > unique[i] && unique[i + 1] > unique[i]) ||
            (unique[i - 1] < unique[i] && unique[i + 1] < unique[i])
        )
            count++;
    }

    return count;
};

module.exports = { countHillValley };

console.log(countHillValley([5, 7, 7, 1, 7]));
