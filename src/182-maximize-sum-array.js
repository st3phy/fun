/**
 * @param {number[]} nums
 * @param {number} K
 * @return {number}
 */
const largestSumAfterKNegations = (nums, k) => {
    // Sort nums, ascending
    nums.sort((a, b) => a - b);

    let i = 0;
    // While we have negative numbers and still have negations to make
    while (nums[i] < 0 && k > 0) {
        // Flip them
        nums[i] = -nums[i];
        k--;
        i++;
    }

    let sum = 0;
    let smallest = Infinity;

    // Calculate sum
    for (const num of nums) {
        sum += num;
        smallest = Math.min(smallest, num);
    }

    // If we still have an odd number of negations to make
    if (k % 2 === 1) {
        // Flipping the smallest absolute value changes the sum by -2 * smallest
        sum -= smallest * 2;
    }

    return sum;
};

module.exports = { largestSumAfterKNegations };

console.log(largestSumAfterKNegations([-8, 3, -5, -3, -5, -2], 6));
