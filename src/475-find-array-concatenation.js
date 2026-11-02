/**
 * @param {number[]} nums
 * @returns {number}
 */
const findTheArrayConcVal = nums => {
    const n = nums.length;
    const middle = Math.floor(n / 2);
    let res = 0;

    for (let i = 0; i < middle; i++) {
        const concat = "" + nums[i] + nums[n - 1 - i];
        res += Number(concat);
    }

    // Add middle value if the array was odd
    if (n % 2) res += nums[middle];

    return res;
};

module.exports = { findTheArrayConcVal };

console.log(findTheArrayConcVal([5, 14, 13, 8, 12]));
