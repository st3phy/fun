/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = (target, arr) => {
    // Use a frequence object
    const freq = {};

    // Add 1 for every value found in target array and substarc 1 for every value found in arr array
    for (let i = 0; i < target.length; i++) {
        freq[target[i]] = (freq[target[i]] || 0) + 1;
        freq[arr[i]] = (freq[arr[i]] || 0) - 1;
    }

    // If all values in freq object are 0, the array are equal
    return Object.values(freq).every(val => val === 0);
};

module.exports = { canBeEqual };

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
