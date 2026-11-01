/**
 * @param {number[]} nums
 * @returns {number}
 */
const maximumCount = nums => {
    const findFirstIndex = target => {
        let left = 0;
        let right = nums.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    };

    const pos = nums.length - findFirstIndex(1);
    const neg = findFirstIndex(0);

    return Math.max(pos, neg);
};

module.exports = { maximumCount };

console.log(maximumCount([0, 0]));
