/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @returns {number}
 */
const closestTarget = (words, target, startIndex) => {
    const n = words.length;

    for (let i = 0; i < n / 2 + 1; i++) {
        const next = (startIndex + i) % n;
        const prev = (startIndex - i + n) % n;
        if (words[next] === target || words[prev] === target) return i;
    }

    return -1;
};

module.exports = { closestTarget };

console.log(closestTarget(["a", "b", "leetcode", "c", "d", "e"], "a", 3));
