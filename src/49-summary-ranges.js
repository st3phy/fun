/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = nums => {
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        // Get start and end of range
        const start = i;
        let end = i;

        // While the next number is the consecutive one, move the end of range
        while (nums[end + 1] - nums[end] === 1) {
            end++;
        }

        // If we have a range, store the range, otherwise, store the lone integer
        const value = start === end ? `${nums[start]}` : `${nums[start]}->${nums[end]}`;
        res.push(value);

        // Jump to the end of current range
        i = end;
    }

    return res;
};

module.exports = { summaryRanges };
