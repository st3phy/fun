/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
    let i = m - 1,
        j = n - 1;

    // Go through finaly arry from end to start
    for (let k = m + n - 1; k >= 0; k--) {
        if (nums1[i] > nums2[j] && i >= 0) {
            nums1[k] = nums1[i];
            i--;
        } else {
            if (j >= 0) {
                nums1[k] = nums2[j];
                j--;
            }
        }
    }

    return nums1;
};

module.exports = { merge };

console.log(merge([-1, 2, 5, 0, 0, 0], 3, [-3, 5, 6], 3));
