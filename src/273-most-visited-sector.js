/**
 * @param {number} n
 * @param {number[]} rounds
 * @returns {number}
 */
const mostVisited = (n, rounds) => {
    // Every complete lap adds exactly 1 visit to each sector so they don't affect the most visited sectors
    // So we are only interested on the partial laps (start lap to n and 1 to end lap)
    const start = rounds[0];
    const end = rounds[rounds.length - 1];

    if (start <= end) {
        return Array.from({ length: end - start + 1 }, (val, i) => start + i);
    } else {
        return [
            ...Array.from({ length: end }, (val, i) => i + 1),
            ...Array.from({ length: n - start + 1 }, (val, i) => start + i)
        ];
    }
};

module.exports = { mostVisited };

console.log(mostVisited(4, [3, 1, 2, 1, 2]));
