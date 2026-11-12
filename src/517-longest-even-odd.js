/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
const longestAlternatingSubarray = (nums, threshold) => {
    let best = 0;
    let curr = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > threshold) {
            // Reset if current val is bigger than threshhold
            curr = 0;
        } else if (curr > 0 && nums[i] % 2 !== nums[i - 1] % 2) {
            // Increment current run
            curr++;
        } else if (nums[i] % 2 === 0) {
            // Start a new run if number is even
            curr = 1;
        } else {
            // Reset if number is odd
            curr = 0;
        }
        best = Math.max(curr, best);
    }

    return best;
};

module.exports = { longestAlternatingSubarray };

console.log(longestAlternatingSubarray([2, 2], 18));
