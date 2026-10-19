/**
 * @param {number[]} nums
 * @returns {number}
 */
const countQuadruplets = nums => {
    // a + b + c = d === a + b = d - c
    let diffMap = new Map();
    const n = nums.length;
    let count = 0;

    for (let b = n - 2; b >= 1; b--) {
        // Add all (d-c) pairs to diffMap where b < c < d
        for (let d = b + 2; d < n; d++) {
            const diff = nums[d] - nums[b + 1];
            diffMap.set(diff, (diffMap.get(diff) || 0) + 1);
        }

        // Compute every a + b and check how many equivalences it has in the diff map
        for (let a = 0; a < b; a++) {
            count += diffMap.get(nums[a] + nums[b]) || 0;
        }
    }

    return count;
};

module.exports = { countQuadruplets };

console.log(countQuadruplets([1, 1, 1, 3, 5, 6, 7, 8]));
