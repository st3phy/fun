/**
 * @param {number[]} nums
 * @returns {number}
 */
const subsetXORSum = nums => {
    let subsets = [];

    function generateSubset(nums, index, subset, subsets) {
        // Index reached end of nums
        if (index === nums.length) {
            subsets.push([...subset]);
            return;
        }

        // Generate subset with nums[index]
        subset.push(nums[index]);
        generateSubset(nums, index + 1, subset, subsets);
        subset.pop();

        // Generate subset without nums[index]
        generateSubset(nums, index + 1, subset, subsets);
    }

    generateSubset(nums, 0, [], subsets);

    let sum = 0;
    for (const subset of subsets) {
        let temp = 0;
        for (const num of subset) {
            temp ^= num;
        }
        sum += temp;
    }

    return sum;
};

module.exports = { subsetXORSum };

console.log(subsetXORSum([1, 2, 3, 4]));
