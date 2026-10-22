/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = nums => {
    const n = nums.length;
    // Find index of i
    const index = nums.indexOf(0);

    // nums must have a max of 2 ordered sub-arrays - both increasing or both decreasing
    let isAsc = true;
    let isDesc = true;

    // We start from i = 1 since we know that 0 must be on pos 0
    for (let i = 1; i < n; i++) {
        //console.log(i, (nums[i] + index) % n);
        if (i !== nums[(i + index) % n]) {
            isAsc = false;
        }
        if (n - i !== nums[(i + index) % n]) {
            isDesc = false;
        }
    }

    if (!isAsc && !isDesc) return -1;

    if (isAsc) return Math.min(index, 2 + n - index);
    if (isDesc) return Math.min(index + 2, n - index);

    return 0;
};

module.exports = { minOperations };

console.log(minOperations([0, 2, 1]));
