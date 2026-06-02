/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
    // Transform nums1 and nums2 to a Set() - this also removes duplicates
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    // Filter unique values from nums1 - only keep values that are found in set2
    return [...set1].filter(num => set2.has(num));
};

module.exports = { intersection };

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
