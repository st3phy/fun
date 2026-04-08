/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    // Brute force solution - runtime 36ms, memory 54mb
    // for (var i = 0; i < nums.length; i++) {
    //     for (var j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] == target) {
    //             return [i, j];
    //         }
    //     }
    // }
    // Set() solution - runtime 4ms, memory 56mb
    // const set = new Set(nums);
    // for (let i = 0; i < nums.length; i++) {
    //     let find = target - nums[i];
    //     // If the current value has the necessary pair
    //     if (set.has(find)) {
    //         for (let j = i + 1; j < nums.length; j++) {
    //             // Search for its position
    //             if (nums[j] == find) {
    //                 return [i, j];
    //             }
    //         }
    //     }
    // }

    // Map() solution - runtime 4ms, memory 59mb
    // const map = new Map(nums.map((val, i) => [val, i]));
    // for (let i = 0; i < nums.length; i++) {
    //     const find = target - nums[i];
    //     const found = map.get(find);
    //     if (found && found !== i) {
    //         return [i, found];
    //     }
    // }

    // HashMap solution - runtime 0ms, memory 54mb
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const find = target - nums[i];

        if (undefined !== hashMap[find]) {
            return [hashMap[find], i];
        }
        hashMap[nums[i]] = i;
    }
};

module.exports = { twoSum };

twoSum([2, 7, 11, 15], 9);
