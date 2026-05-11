/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
    // XOR between two identical numbers will return 0
    // XOR between 2 identical numbers + one single number will return that number
    let res = nums[0];

    for (let i = 1; i < nums.length; i++) {
        res ^= nums[i];
    }

    return res;
};

module.exports = { singleNumber };
