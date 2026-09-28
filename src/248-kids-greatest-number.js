/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @returns {boolean[]}
 */
const kindWithCandies = (candies, extraCandies) => {
    // Find max candies value
    let max = 0;
    for (const n of candies) {
        if (n > max) max = n;
    }

    // Check if adding extraCandies produces max or greater
    const res = [];
    for (let i = 0; i < candies.length; i++) {
        res[i] = candies[i] + extraCandies >= max ? true : false;
    }

    return res;
};

module.exports = { kindWithCandies };

console.log(kindWithCandies([2, 3, 5, 1, 3], 3));
