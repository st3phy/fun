/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[][]}
 */
const findDifference = (nums1, nums2) => {
    const res = [[], []];

    // Save distinct numbers for both arrays
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    // Keep numbers that appear in one set and not the other
    for (const num of set1) {
        if (!set2.has(num)) {
            res[0].push(num);
        }
    }
    for (const num of set2) {
        if (!set1.has(num)) {
            res[1].push(num);
        }
    }

    return res;
};

module.exports = { findDifference };

console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
