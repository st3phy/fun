/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @returns {number[]}
 */
const twoOutOfThree = (nums1, nums2, nums3) => {
    const count = new Array(101).fill(0);

    for (const nums of [nums1, nums2, nums3]) {
        for (const num of new Set(nums)) {
            count[num]++;
        }
    }

    const res = [];

    for (let i = 0; i < 101; i++) {
        if (count[i] >= 2) res.push(i);
    }

    return res;
};

module.exports = { twoOutOfThree };

console.log(twoOutOfThree([3, 1], [2, 3], [1, 2]));
