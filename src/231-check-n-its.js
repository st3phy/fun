/**
 * @param {number[]} arr
 * @returns {boolean}
 */
const checkIfExist = arr => {
    const set = new Set();

    for (const val of arr) {
        // Check if the set has a value that is double of half the current value
        if (set.has(val * 2) || set.has(val / 2)) {
            return true;
        }

        // Add value to set
        set.add(val);
    }

    return false;
};

module.exports = { checkIfExist };

console.log(checkIfExist([10, 2, 5, 3]));
