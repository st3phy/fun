/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @returns {boolean}
 */
const isCovered = (ranges, left, right) => {
    const nums = new Array(52).fill(0);

    // Mark the beginning and end of each range using a difference array
    for (const [start, finish] of ranges) {
        nums[start]++;
        nums[finish + 1]--;
    }

    // Running sum - tracks whether the current number is covered by a range
    let sum = 0;
    for (let i = 0; i <= right; i++) {
        sum += nums[i];

        // If the running sum is 0, the current number is not covered
        if (sum === 0 && i >= left) return false;
    }

    return true;
};

module.exports = { isCovered };

console.log(
    isCovered(
        [
            [2, 21],
            [2, 2]
        ],
        35,
        42
    )
);
