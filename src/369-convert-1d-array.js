/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @returns {number[][]}
 */
const construct2DArray = (original, m, n) => {
    if (original.length !== m * n) return [];

    const arr = Array.from({ length: m }, () => []);

    for (let i = 0; i < original.length; i++) {
        arr[Math.floor(i / n)][i % n] = original[i];
    }

    return arr;
};

module.exports = { construct2DArray };

console.log(construct2DArray([1, 2, 3, 4, 5, 6], 3, 2));
