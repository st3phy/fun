/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const decompressRLElist = nums => {
    const list = [];

    // Get elements two at a time
    for (let i = 0; i < nums.length; i += 2) {
        // Add the val the the "list" array for frequency times
        for (let j = 0; j < nums[i]; j++) {
            list.push(nums[i + 1]);
        }
    }

    return list;
};

module.exports = { decompressRLElist };

console.log(decompressRLElist([1, 2, 3, 4]));
