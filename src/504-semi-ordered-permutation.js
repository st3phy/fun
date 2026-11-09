/**
 * @param {number[]} nums
 * @returns {number}
 */
const semiOrderedPermutation = nums => {
    let n = nums.length;
    let onePos = 0;
    let nPos = 0;
    let swaps = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) onePos = i;
        else if (nums[i] === n) nPos = i;
    }

    // 1 needs onePos adjacent swaps to reach index 0
    // n needs n - 1 - nPos adjacent swapt to reach index n - 1
    swaps += onePos + n - 1 - nPos;

    // If the paths of 1 and n cross, one swap moves both of them closer to their positions, so we have one less swap
    return onePos > nPos ? swaps - 1 : swaps;
};

module.exports = { semiOrderedPermutation };

console.log(semiOrderedPermutation([3, 2, 1]));
