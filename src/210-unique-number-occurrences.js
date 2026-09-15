/**
 * @param {number[]} arr
 * @returns {boolean}
 */
const uniqueOccurrences = arr => {
    // Count number of occurrences
    const map = new Map();
    for (const val of arr) {
        map.set(val, (map.get(val) || 0) + 1);
    }

    // Add all occurrences in a Set()
    const set = new Set(map.values());

    // If the set and the map have the same number of elements, then all the occurrences were unique
    return set.size === map.size;
};

module.exports = { uniqueOccurrences };

console.log(uniqueOccurrences([1, 2]));
