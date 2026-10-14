/**
 * @param {number[]} nums
 * @returns {number}
 */
const minOperations = nums => {
    let add = 0;
    let prev = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // If current number is bigger than prev, move to next number
        if (prev < nums[i]) {
            prev = nums[i];
            continue;
        }

        // Store the value the current number SHOULD be
        prev++;
        // Add the difference the value the number SHOULD be and the value it is
        add += prev - nums[i];
    }

    return add;
};

module.exports = { minOperations };

console.log(minOperations([1, 5, 2, 4, 1]));
