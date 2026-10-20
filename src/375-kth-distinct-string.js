/**
 * @param {string[]} arr
 * @param {number} k
 * @returns {string}
 */
const kthDistinct = (arr, k) => {
    const count = new Map();
    for (let str of arr) {
        count.set(str, (count.get(str) || 0) + 1);
    }

    for (const str of arr) {
        if (count.get(str) === 1) {
            k--;
        }
        if (k === 0) return str;
    }

    return "";
};

module.exports = { kthDistinct };

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
