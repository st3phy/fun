/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = (list1, list2) => {
    let res = [];
    const len1 = list1.length;
    const len2 = list2.length;
    let minSum = len1 + len2;
    const map = new Map();

    // Map first list's strings to corresponding indices
    for (let i = 0; i < len1; i++) {
        map.set(list1[i], i);
    }

    for (let i = 0; i < len2; i++) {
        // If word exists in both lists
        if (map.has(list2[i])) {
            // Compute index sum for current common word
            const sum = map.get(list2[i]) + i;
            // If current sum is smaller than previously minSum
            if (sum < minSum) {
                minSum = sum;
                // Override results array with current word
                res = [list2[i]];
            } else if (sum === minSum) {
                res.push(list2[i]);
            }
        }
    }

    return res;
};

module.exports = { findRestaurant };

console.log(findRestaurant([], []));
