/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = score => {
    // let res = [];

    // // Map values in array as value => pos
    // const map = new Map();
    // for (let i = 0; i < score.length; i++) {
    //     map.set(score[i], i);
    // }

    // // sort array, descending
    // score.sort((a, b) => b - a);

    // // For each sorted score
    // for (let i = 0; i < score.length; i++) {
    //     // Get original position in score array
    //     const position = map.get(score[i]);
    //     // Add placed value to results array, on original position
    //     if (i === 0) res[position] = "Gold Medal";
    //     else if (i === 1) res[position] = "Silver Medal";
    //     else if (i === 2) res[position] = "Bronze Medal";
    //     else res[position] = `${i + 1}`;
    // }

    // return res;

    // Sort score array, descending
    const sorted = [...score].sort((a, b) => b - a);
    const map = new Map();

    for (let i = 0; i < sorted.length; i++) {
        // Map sorted scores to desired positions
        if (i === 0) map.set(sorted[i], "Gold Medal");
        else if (i === 1) map.set(sorted[i], "Silver Medal");
        else if (i === 2) map.set(sorted[i], "Bronze Medal");
        else map.set(sorted[i], `${i + 1}`);
    }

    // Return values from map for each score in score array
    return score.map(val => map.get(val));
};

module.exports = { findRelativeRanks };

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
