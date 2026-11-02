/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @returns {number[][]}
 */
const mergeArrays = (nums1, nums2) => {
    let n = nums1.length;
    let m = nums2.length;
    let i = 0;
    let j = 0;
    const res = [];

    while (i < n && j < m) {
        if (nums1[i][0] < nums2[j][0]) {
            res.push(nums1[i]);
            i++;
        } else if (nums1[i][0] > nums2[j][0]) {
            res.push(nums2[j]);
            j++;
        } else {
            res.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
            i++;
            j++;
        }
    }

    while (i < n) {
        res.push(nums1[i]);
        i++;
    }
    while (j < m) {
        res.push(nums2[j]);
        j++;
    }

    return res;
};

module.exports = { mergeArrays };

console.log(
    mergeArrays(
        [
            [1, 2],
            [2, 3],
            [4, 5]
        ],
        [
            [1, 4],
            [3, 2],
            [4, 1]
        ]
    )
);
