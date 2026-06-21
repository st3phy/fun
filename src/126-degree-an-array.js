/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = nums => {
    const indices = new Map();

    // Map each number to its indices
    for (let i = 0; i < nums.length; i++) {
        if (!indices.has(nums[i])) {
            indices.set(nums[i], []);
        }
        indices.get(nums[i]).push(i);
    }

    let maxLen = 0;
    let contenders = [];
    // Check which number has the most indices, that is the maximum frequency
    for (const [num, values] of indices) {
        const len = values.length;
        // We found a new maximum frequency
        if (len > maxLen) {
            maxLen = len;
            // The contenders array resets to currently found number
            contenders = [num];
        }
        // We found a frequncy equal to the maximum frequency
        else if (len == maxLen) {
            // Add current number to contenders array
            contenders.push(num);
        }
    }

    let degree = Infinity;
    // Go over every number that has a maximum frequency
    for (const num of contenders) {
        // Get the number's indices and calculate its maximum frequency
        const pos = indices.get(num);
        degree = Math.min(degree, pos[pos.length - 1] - pos[0] + 1);
    }

    return degree;
};

module.exports = { findShortestSubArray };

console.log(findShortestSubArray([1, 2, 2, 3, 1]));
