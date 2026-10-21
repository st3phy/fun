/**
 * @param {number[]} digits
 * @returns {number[]}
 */
const findEvenNumbers = digits => {
    const res = [];

    // Count frequency of provided digits
    const freq = new Array(10).fill(0);
    for (const digit of digits) {
        freq[digit]++;
    }

    // Compute all 3 digit, even numbers
    for (let num = 100; num < 1000; num += 2) {
        // Get digits of number
        const a = num % 10;
        const b = Math.floor(num / 10) % 10;
        const c = Math.floor(num / 100);

        // Check if digits of number appear enough times in freq array
        freq[a]--;
        freq[b]--;
        freq[c]--;
        if (freq[a] >= 0 && freq[b] >= 0 && freq[c] >= 0) res.push(num);

        // Return freq array to original values
        freq[a]++;
        freq[b]++;
        freq[c]++;
    }

    return res;
};

module.exports = { findEvenNumbers };

console.log(findEvenNumbers([2, 1, 3, 0]));
