/**
 * @param {string} s
 * @param {number[]} distance
 * @returns {boolean}
 */
const checkDistances = (s, distance) => {
    const dist = new Array(26).fill(-1);

    for (let i = s.length - 1; i >= 0; i--) {
        const pos = s[i].charCodeAt(0) - 97;
        // First appearance of curr char
        if (dist[pos] === -1) {
            dist[pos] += i;
        }
        // Second appearance of curr char
        else {
            dist[pos] -= i;
            if (distance[pos] !== dist[pos]) return false;
        }
    }

    return true;
};

module.exports = { checkDistances };

console.log(checkDistances("abaccb", [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
