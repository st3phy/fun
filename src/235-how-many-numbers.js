/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const smallerNumbersThanCurrent = nums => {
    // Sort array, ascending
    const sorted = [...nums].sort((a, b) => a - b);

    // Map position of first occurrence of each sorted number
    const map = new Map();
    for (let i = 0; i < sorted.length; i++) {
        if (!map.has(sorted[i])) {
            map.set(sorted[i], i);
        }
    }

    // The mapped indices equal the number of elements smaller than each number
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        res.push(map.get(nums[i]));
    }

    return res;
};

module.exports = { smallerNumbersThanCurrent };

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
