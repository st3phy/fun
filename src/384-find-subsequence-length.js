/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
const maxSubsequence = (nums, k) => {
    /* Sort array desc, preserve original indices
        keep only the first k element
        sort kept elements asc by index to get back to original order of nums
        map only the numbers to the result
    */
    return nums
        .map((value, index) => [value, index])
        .sort((a, b) => b[0] - a[0])
        .slice(0, k)
        .sort((a, b) => a[1] - b[1])
        .map(num => num[0]);
};

module.exports = { maxSubsequence };

console.log(maxSubsequence([4, -2, -1, 3], 3));
