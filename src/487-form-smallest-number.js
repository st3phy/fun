/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */
const minNumber = (nums1, nums2) => {
    const set = new Set(nums1);

    let min1 = 10;
    let min2 = 10;
    let common = 10;

    for (const n of nums1) {
        if (n < min1) min1 = n;
    }
    for (const n of nums2) {
        if (set.has(n) && n < common) common = n;
        if (n < min2) min2 = n;
    }

    return common < 10 ? common : min1 < min2 ? min1 * 10 + min2 : min2 * 10 + min1;
};

module.exports = { minNumber };

console.log(minNumber([3, 5, 2, 6], [3, 1, 7]));
