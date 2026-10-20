/**
 * @param {string} word
 * @returns {number}
 */
const countVowelSubstrings = word => {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let count = 0;
    let start = 0;
    const last = { a: -1, e: -1, i: -1, o: -1, u: -1 };

    for (let i = 0; i < word.length; i++) {
        const ch = word[i];

        // If we find a consonant, start counting again from next char
        if (!vowels.has(word[i])) {
            start = i + 1;
            continue;
        }

        // Save the last index where we saw this vowel
        last[ch] = i;

        // Earliest last-seen position among all five vowels
        const earliest = Math.min(last.a, last.e, last.i, last.o, last.u);

        if (earliest >= start) {
            // Any substring that ends at i and starts anywhere from start through earliest is valid
            count += earliest - start + 1;
        }
    }

    return count;
};

module.exports = { countVowelSubstrings };

console.log(countVowelSubstrings("cuaieuouacaaaa"));
