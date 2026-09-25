/**
 * @param {number[]} arr
 * @returns {number}
 */
const findLucky = arr => {
    // Count frequency of numbers
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }

    let lucky = -1;
    for (const [num, freq] of map) {
        // If current number has frequency equal to its value and is bigger than prev number, update number
        if (num === freq && num > lucky) {
            lucky = num;
        }
    }

    return lucky;
};

module.exports = { findLucky };

console.log(findLucky([3, 3, 3, 2, 2, 1]));
