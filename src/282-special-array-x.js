/**
 * @param {number[]} nums
 * @returns {number}
 */
const specialArray = nums => {
    // Max value in nums
    const max = Math.max(...nums);

    // Compute the frequency array's dimension
    const x = Math.max(max + 1, nums.length);

    // Count how many times each value (from 0 to x) appears in the array
    const freq = new Array(x).fill(0);
    for (let i = 0; i < nums.length; i++) {
        freq[nums[i]]++;
    }

    // Iterate over freq array and see if the suffix sum is equal to current number
    for (let i = freq.length - 1; i >= 1; i--) {
        if (freq[i] === i) return i;
        freq[i - 1] += freq[i];
    }

    return -1;
};

module.exports = { specialArray };

console.log(specialArray([3, 5]));
