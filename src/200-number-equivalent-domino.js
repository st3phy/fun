/**
 * @param {number[][]} dominoes
 * @return {number}
 */
const numEquivDominoPairs = dominoes => {
    // Count number of equivalent dominoes
    const e = new Map();

    for (const domino of dominoes) {
        // Transform domino to an integer
        const val = domino[0] > domino[1] ? domino[1] * 10 + domino[0] : domino[0] * 10 + domino[1];

        e.set(val, (e.get(val) || 0) + 1);
    }

    // Num of pairs is n(n-1)/2 for each domino set
    let sum = 0;
    e.forEach(val => {
        sum += (val * (val - 1)) / 2;
    });

    return sum;
};

module.exports = { numEquivDominoPairs };

console.log(
    numEquivDominoPairs([
        [1, 2],
        [1, 2],
        [1, 1],
        [2, 1],
        [2, 2]
    ])
);
