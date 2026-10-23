/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const sortEvenOdd = nums => {
    const evens = [];
    const odds = [];

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            evens.push(nums[i]);
        } else {
            odds.push(nums[i]);
        }
    }

    evens.sort((a, b) => a - b);
    odds.sort((a, b) => b - a);

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            nums[i] = evens[i / 2];
        } else {
            nums[i] = odds[(i - 1) / 2];
        }
    }

    return nums;
};

module.exports = { sortEvenOdd };

console.log(sortEvenOdd([2, 1, 4, 0, 6, 3, 8, 5]));
