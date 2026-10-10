/**
 * @param {string} s
 * @returns {boolean}
 */
const halvesAreAlike = s => {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    const half = s.length / 2;
    let count = 0;

    // If vowel found in the first half of array, add to count, if in second half, remove from count
    for (let i = 0; i < half; i++) {
        if (vowels.has(s[i])) count++;
        if (vowels.has(s[i + half])) count--;
    }

    // If halfs are alike, the resulting count should be 0
    return !count;
};

module.exports = { halvesAreAlike };

console.log(halvesAreAlike("book"));
