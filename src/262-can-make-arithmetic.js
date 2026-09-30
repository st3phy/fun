/**
 * @param {number[]} arr
 * @returns {boolean}
 */
const canMakeArithmeticProgression = arr => {
    // If an array can form an arithmetic progression, then the diff between 2 consecutive numbers must be
    // (max - min) / (n - 1), where n is the number of entries in the array
    const n = arr.length;
    let min = Infinity;
    let max = -Infinity;

    for (const num of arr) {
        if (num < min) min = num;
        if (num > max) max = num;
    }

    const diff = (max - min) / (n - 1);
    const numbers = new Set(arr);

    // Generate what the progression should look like
    for (let i = 0; i < n; i++) {
        const expected = min + i * diff;
        if (!numbers.has(expected)) return false;
    }

    return true;
};

module.exports = { canMakeArithmeticProgression };

console.log(canMakeArithmeticProgression([3, 5, 1]));
