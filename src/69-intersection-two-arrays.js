/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
    let map = new Map();
    const res = [];

    // Add to map: the number of times each value in nums1 appears
    for (const num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Every time a value from nums1 appears in nums2, add it to res array and decrement map
    for (const num of nums2) {
        if ((map.get(num) ?? 0) > 0) {
            res.push(num);
            map.set(num, map.get(num) - 1);
        }
    }

    return res;
};

module.exports = { intersect };

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
