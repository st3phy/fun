/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
    const result = [];

    nums.sort((a, b) => a - b);
    if (nums[0] <= 0) {
        // Last value occurence
        const last = new Map();
        for (let i = 0; i < nums.length; i++) {
            last.set(nums[i], i);
        }

        // Traverse the numbers
        for (let i = 0; i < nums.length - 2; i++) {
            // Skip duplicates for i
            if (0 !== i && nums[i] === nums[i - 1]) {
                continue;
            }

            // No solution possible from this point
            if (nums[i] > 0) {
                break;
            }

            for (let j = i + 1; j < nums.length - 1; j++) {
                // Skip duplicates for j
                if (i + 1 !== j && nums[j] === nums[j - 1]) {
                    continue;
                }

                // Find the last match w/ hashmap
                const key = -(nums[i] + nums[j]);

                // Append the result
                if (last.has(key) && last.get(key) > j) {
                    result.push([nums[i], nums[j], key]);
                }
            }
        }
    }

    return result;
};

module.exports = { threeSum };
