/**
 * @param {number[]} arr
 * @returns {number}
 */
const findSpecialInteger = arr => {
    const n = arr.length;

    // If a number appears in more than 25% of positions, then it should appear at one of the splitting points (arr split in 4)
    const candidates = [arr[0], arr[Math.floor(n / 4)], arr[Math.floor(n / 2)], arr[Math.floor((3 * n) / 4)]];

    for (const candidate of candidates) {
        const count = arr.lastIndexOf(candidate) - arr.indexOf(candidate) + 1;
        if (count > Math.floor(n / 4)) return candidate;
    }

    return arr[0];
};

module.exports = { findSpecialInteger };

console.log(findSpecialInteger([1]));
